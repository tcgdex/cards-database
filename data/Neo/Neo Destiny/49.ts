import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Machoke",
		fr: "Machopeur lumineux"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Return Home",
				fr: "Retour à l'envoyeur"
			},
			effect: {
				en: "If you have any Benched Pokémon, shuffle 1 of them and all cards attached to it into your deck.",
				fr: "Si vous avez des Pokémon sur votre Banc, mélangez l'un d'eux et toutes les cartes qui lui sont attachées à votre deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Gentle Kick",
				fr: "P'tit pied"
			},

			effect: {
				en: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage.",
				fr: "Si le Pokémon défenseur n'a pas de marqueurs de dégâts sur lui, cette attaque inflige 40 dégâts. S'il en a, cette attaque inflige 20 dégâts."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon ne se fatigue jamais, quoi qu'il fasse, même s'il s'entraîne dur."
	}
}

export default card
