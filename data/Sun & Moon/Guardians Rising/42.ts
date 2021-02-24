import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 160,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electromagnetic Rock Wrecker",
				fr: "Roc-Boulet Électromagnétique",
			},
			effect: {
				en: "Flip a coin for each Lightning Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Lightning attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Slam",
				fr: "Tacle Lourd",
			},
			effect: {
				en: "This attack does 30 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
