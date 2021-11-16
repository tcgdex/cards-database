import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Registeel ex",
		fr: "Registeel ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 90,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette"
			},
			effect: {
				en: "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Registeel ex par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wave",
				fr: "Vague d'acier"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
