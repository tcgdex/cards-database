import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resistance Shade",
				fr: "Résistance Ombragée"
			},
			effect: {
				en: "If you have Lunatone in play, your opponent’s Pokémon in play have no Resistance.",
				fr: "Si vous avez Séléroc en jeu, les Pokémon en jeu de votre adversaire n’ont pas de Résistance."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
