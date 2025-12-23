import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Page() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Input placeholder="Type here..." />
                <Button size="sm">Add Author</Button>
            </div>
        </div>
    );
}
