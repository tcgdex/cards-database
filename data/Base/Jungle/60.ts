import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pichu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Spark",
				fr: "Étincelle"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a au moins 1 Pokémon sur son Banc, choisissez l'un d'eux ; cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Faiblesse et la Résistance au Pokémon du Banc.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages."
	},

	variants: {
		wPromo: true
	}
}

export default card
