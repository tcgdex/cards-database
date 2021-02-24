import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sludge Cell",
				fr: "Celllule vaseuse",
			},
			effect: {
				en: "If Muk remains affected by any Special Conditions between turns, remove 2 damage counters from Muk.",
				fr: "Au début du tour de chaque joueur, si Grotadmorv est affecté par un État Spécial, retirez-lui 2 marqueurs de dégât.",
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
				en: "Strange Poison",
				fr: "Poison étrange",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, Grotadmorv est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strange Sludge",
				fr: "Vase étrange",
			},
			effect: {
				en: "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Si Grotadmorv est Empoisonné, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
