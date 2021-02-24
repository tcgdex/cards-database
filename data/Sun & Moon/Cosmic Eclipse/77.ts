import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blow-Away Bomb",
				fr: "Bombe Repoussante",
			},
			effect: {
				en: "Once during your turn, when you discard this Pokémon with the effect of Roxie, you may put 1 damage counter on each of your opponent's Pokémon. (Place damage counters after the effect of Roxie.)",
				fr: "Une seule fois pendant votre tour, lorsque vous défaussez ce Pokémon du fait de l’effet de la carte Strykna, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire. (Placez les marqueurs de dégâts après l’effet de Strykna.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Balloon Burst",
				fr: "Explosion de Ballon",
			},
			effect: {
				en: "Discard this Pokémon and all cards attached to it.",
				fr: "Défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
