import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Focus Blast",
				fr: "Exploforce",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Spike Lariat",
				fr: "Lasso à piques",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 60 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
