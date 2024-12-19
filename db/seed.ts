import { db, Clients } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Clients).values(
		[
		{ id:1,
			name: 'John Doe',
			age: 30,
			isActive: true },
		  { id:2,
		    name: 'Edgar Allan',
		    age: 23,
		    isActive: true },
		  { id:3,
			name: 'John Smith',
			age: 43,
			isActive: true },
		  { id:4,
			name: 'Elena Doe',
			age: 12,
			isActive: true },
		  { id:5,
			name: 'Alessandro Doe',
			age: 70,
			isActive: false }
				]);




}
