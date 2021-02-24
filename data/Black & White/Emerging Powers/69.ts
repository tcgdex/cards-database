import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		630,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-Os",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Pulse",
				fr: "Vibrobscur",
			},
			effect: {
				en: "Does 10 more damage for each Darkness Energy attached to all of your Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
