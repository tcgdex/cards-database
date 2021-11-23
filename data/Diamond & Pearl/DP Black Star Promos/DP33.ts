import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dusclops",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Hide",
				fr: "Cachette obscure"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand, choose a Pokémon you find there, and put it on the bottom of his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la main de votre adversaire, choisissez-y un Pokémon et placez-le au dessous de son deck. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Reaper Pulse",
				fr: "Pouls maléfique"
			},
			effect: {
				en: "Move up to 2 damage counters from Dusknoir to 1 of your opponent's Benched Pokémon.",
				fr: "Déplacez jusqu'à 2 marqueurs de dégât de Noctunoir sur 1 des Pokémon de Banc de votre adversaire."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	description: {
		fr: "L'antenne sur sa tête capte les ondes radio du monde des esprits lui ordonnant d'y porter les gens."
	}
}

export default card
