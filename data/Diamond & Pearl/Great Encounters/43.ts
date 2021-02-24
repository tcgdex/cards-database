import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Linoone",
		fr: "Lineon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		264,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Switcheroo",
				fr: "Passe-Passe",
			},
			effect: {
				en: "Move a Pokémon Tool card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon (excluding Pokémon that already has a Pokémon Tool attached to it). (If an effect of this attack is prevented, this attack does nothing.)",
				fr: "Déplacez une carte Outil Pokémon attachée à 1 des Pokémon de votre adversaire vers un autre de ses Pokémon (Pokémon possédant déjà une carte Outil Pokémon exclus). (Si un effet de cette attaque est annulé, cette attaque est sans effet).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
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





}

export default card
