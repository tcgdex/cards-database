import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Crobat G",
		fr: "Nostenfert ",
		de: "Iksbat G"
	},
	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flash Bite",
				fr: "Morsure flash",
				de: "Flash Bite"
			},
			effect: {
				en: "Once during your turn, when you put Crobat from your hand onto your Bench, you may put 1 damage counter on 1 of your opponent's Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Nostenfert  de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
				de: "One during your turn, when you put Crobat G from your hand onto your Bench, you may put 1 damage counter on 1 of your opponent's Pokémon."
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
				en: "Toxic Fang",
				fr: "Croc toxik",
				de: "Toxic Fang"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				de: "The Defending pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns."
			},

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
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
