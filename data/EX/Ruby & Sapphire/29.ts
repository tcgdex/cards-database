import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Call",
				fr: "Énergie supplémentaire"
			},
			effect: {
				en: "Attach 1 Energy card from your discard pile to your Active Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à votre Pokémon Actif."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cannonball",
				fr: "Boulet de canon"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Delcatty but not used to pay for this attack's Energy cost.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à Delcatty qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
