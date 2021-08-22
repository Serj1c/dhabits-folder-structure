export type FolderModel = {
    id: number
    title: string
    children: Array<FolderModel> | null
}