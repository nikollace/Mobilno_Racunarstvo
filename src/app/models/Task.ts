export class Task {
    title: string;
    description: string;
    priority: string;
    createdAt: string;
    id: string;
    editClicked: boolean;
    constructor(id: string, title: string, description: string, priority: string, createdAt: string) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.createdAt = createdAt;
        this.id = id;
        this.editClicked = false;
    }
}