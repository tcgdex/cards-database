import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Jolteon ex",
		fr: "Voltali ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Thunder",
				fr: "Tonnerre évolutif"
			},
			effect: {
				en: "Once during your turn, when you play Jolteon ex from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Voltali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Second Bite",
				fr: "Point douloureux"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Blast",
				fr: "Grondement de tonnerre"
			},
			effect: {
				en: "Discard a Lightning Energy card attached to Jolteon ex.",
				fr: "Défaussez une carte Énergie  attachée à Voltali ex."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
