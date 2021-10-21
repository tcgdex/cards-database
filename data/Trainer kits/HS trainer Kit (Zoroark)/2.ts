import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Zoroark)'

const card: Card = {
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}]
}

export default card