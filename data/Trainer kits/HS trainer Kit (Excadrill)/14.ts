import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Excadrill)'

const card: Card = {
	set: Set,

	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		pt: "Timburr",
		de: "Praktibalk"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card