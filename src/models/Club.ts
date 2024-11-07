
export interface Club {
    id: string;         // Unique identifier for the club
    name: string;       // Name of the club
    logo: string;       // URL or path to the club's logo
    country: string;    // Country where the club is located
}
export interface AddClubFormData {
    name: string;
    logo: string; // Assuming logo is a string (path or URI)
    country: string;
}