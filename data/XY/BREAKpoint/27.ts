import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "M Gyarados-EX",
		fr: "M-Léviator-EEX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blast Geyser",
				fr: "Geyser Explosif",
			},
			effect: {
				en: "You may do 20 more damage for each Water Energy attached to this Pokémon. If you do, discard the top 2 cards of your deck.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
