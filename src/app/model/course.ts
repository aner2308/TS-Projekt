export interface Course {
    courseCode: string,
    subjectCode: string,
    level: "AV" | "GR",
    progression: string,
    courseName: string,
    points: number,
    institutionCode: string,
    subject: string, 
    syllabus: string
}
