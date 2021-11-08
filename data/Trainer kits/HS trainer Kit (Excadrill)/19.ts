import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Excadrill)'

const card: Card = {
	set: Set,

	name: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}]
}

export default card