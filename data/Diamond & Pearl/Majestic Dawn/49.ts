import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Unown Q",
		fr: "Zarbi Q",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "QUICK",
				fr: "QUICK",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown Q is on your Bench, you may discard all cards attached to Unown Q and attach Unown Q to 1 of your Pokémon as a Pokémon Tool card. As long as Unown Q is attached to a Pokémon, you pay Colorless less to retreat that Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Q est sur votre Banc, vous pouvez défausser toutes les cartes qui lui sont attachées et attachez Zarbi Q à 1 de vos Pokémon comme carte Outil Pokémon. Tant que Zarbi Q est attachée à 1 Pokémon, vous payez 1 Colorless de moins pour le faire battre en retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
