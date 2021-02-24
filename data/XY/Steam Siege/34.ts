import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		693,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mega Boost",
				fr: "Méga Boost",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l’un de vos Pokémon Méga-Évolution.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-Masse",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
