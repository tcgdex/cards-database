import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stretch Vine",
				fr: "Longue Liane",
				de: "Stretch Vine"
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 2 of your opponent's benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
				de: "Absorb"
			},
			effect: {
				en: "Remove 2 damage counters from Carnivine.",
				fr: "Retirez à Vortente 2 marqueurs de dégât.",
				de: "Remove 2 damage counters from Carnivine."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Vine Extract",
				fr: "Extrait de plante",
				de: "Vine Extrakt"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and Poisoned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Brûlé et Empoisonné.",
				de: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and poisoned."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
