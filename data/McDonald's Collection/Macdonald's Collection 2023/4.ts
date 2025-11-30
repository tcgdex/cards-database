import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [974],

	hp: 90,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				en: "Frost Smash",
				fr: "Coup de Givre",
				es: "Golpe Gélido",
				it: "Geloschiacciata",
				pt: "Pancada Gélida",
				de: "Frosthieb"
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

