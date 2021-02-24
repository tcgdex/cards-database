import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Houndour",
		fr: "Hunduster",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Revenge Fang",
				fr: "Croc vengeur",
			},
			effect: {
				en: "If you have less Benched Pokémon than your opponent, each of Houndoom's attacks does 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si vous possédez moins de Pokémon de Banc que votre adversaire, chacune des attaques de Demolosse inflige 40 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Sensation",
				fr: "Sensation brûlante",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme éclatante",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Fire Energy attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Fire attachées à Demolosse.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
