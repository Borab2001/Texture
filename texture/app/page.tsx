"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Tiptap from "@/components/ui/Tiptap";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {

	const formSchema = z.object({
		title: z
			.string()
			.min(5, { message: "Oops... the title isn't long enough 😅" })
			.max(100, { message: "Oops... the title is too long 😭" }),
		price: z.number().min(5, { message: "Oops... the price is too low 🤓" }),
		description: z
			.string()
			.min(5, { message: "Oops... the description isn't long enough 😢" })
			.max(100, { message: "Oops... the description is too long 🥲" })
			.trim(),
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		mode: 'onChange', // tracking everytime there is a change
		defaultValues: {
			title: "",
			price: 29.99,
			description: "",
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
	
	}
	
	return (
		<main className="p-24">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
					<FormField 
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Main title for your product" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField 
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Tiptap description={field.name} onChange={field.onChange} />
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</main>
	)
}
