import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
	},
	illustrator: "Yuri Umemura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Vitesse extrême",
			},
			effect: {
				en: "Entei's Retreat Cost is Colorless less for each Fire Energy attached to Entei.",
				fr: "Le Coût de retraite de Entei est Colorless de moins pour chaque Énergie Fire attachée à Entei.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Wild Blaze",
				fr: "Brasier sauvage",
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
