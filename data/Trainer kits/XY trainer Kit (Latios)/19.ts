import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		de: "Enekoro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}]
}

export default card