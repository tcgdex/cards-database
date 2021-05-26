import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Shell",
				fr: "Carapace primitive",
			},
			effect: {
				en: "As long as Kabutops is your Active Pokémon, your opponent can't play any Trainer cards from his or her hand.",
				fr: "Tant que Kabutops est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Dresseur de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Chop Up",
				fr: "Découper",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
