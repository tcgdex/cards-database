import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		788,
	],
	hp: 120,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Dream Away",
				fr: "Rêve d’Éloignement",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				fr: "Lancez une pièce. Si c’est face, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Wonder Shine",
				fr: "Éclat Merveilleux",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
