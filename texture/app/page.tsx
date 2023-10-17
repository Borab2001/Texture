import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

import { useForm } from "react-hook-form";

export default function Home() {
	const form = useForm({
		mode: 'onChange', // tracking everytime there is a change
		defaultValues: {
			title: "",
			description: "",
		}
	});
	
	return (
		<main className=""></main>
	)
}
