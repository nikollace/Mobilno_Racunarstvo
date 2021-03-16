export class Task {
    title: string;
    description: string;
    priority: string;
    createdAt: string;
    id: Date;
    editClicked: boolean;
    constructor(title: string, description: string, priority: string, createdAt: string) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.createdAt = createdAt;
        this.id = new Date();
        this.editClicked = false;
    }
}