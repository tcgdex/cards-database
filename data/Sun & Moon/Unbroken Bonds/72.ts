import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hypnotic Pendulum",
				fr: "Pendule Hypnotique",
			},
			effect: {
				en: "When your opponent's Active Pokémon is Knocked Out, flip a coin. If heads, choose which of your opponent's Benched Pokémon becomes their new Active Pokémon.",
				fr: "Lorsque le Pokémon Actif de votre adversaire est mis K.O., lancez une pièce. Si c’est face, choisissez le Pokémon de Banc de votre adversaire qui deviendra son nouveau Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stir the Brain",
				fr: "Remue-Méninges",
			},
			effect: {
				en: "This attack does 10 more damage for each card in your opponent's hand.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
			},
			damage: 30,

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
