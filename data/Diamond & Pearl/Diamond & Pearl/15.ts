import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},
	illustrator: "Hiroaki Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		435,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Frustration",
				fr: "Frustration",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire ne possédant pas de marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Toxic Cloud",
				fr: "Nuage Toxik",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
