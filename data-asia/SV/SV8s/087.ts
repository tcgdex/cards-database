import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Sandygast",
		th: "ซึนาบา"
	},

	illustrator: "Koji Nakata",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Sandygast membutakan mangsanya dengan pasir dan hendak mendekatinya pada kesempatan itu, tetapi mangsa tersebut melarikan diri karena pergerakan Pokémon ini lambat.",
		th: "สาดทรายเข้าตาเหยื่อ แล้วอาศัยจังหวะนั้นขยับเข้าไปใกล้ ๆ แต่ เพราะเคลื่อนไหวช้าเหยื่อเลยมักหนีไปได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Semburan Pasir",
			th: "ละอองทราย"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card