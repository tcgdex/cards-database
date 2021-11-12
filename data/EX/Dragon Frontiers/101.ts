import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Mew Star δ",
		fr: "Mew ☆ δ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mimicry",
				fr: "Mimétisme"
			},
			effect: {
				en: "Choose an attack on 1 of your opponent's Pokémon in play. Mimicry copies that attack. This attack does nothing if Mew Star doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew Star performs that attack.",
				fr: "Choisissez une attaque d'1 des Pokémon en jeu de votre adversaire. Mimétisme copie cette attaque. Cette attaque est sans effet si Mew  ne possède pas l'Énergie nécessaire pour utiliser cette attaque. (Vous devez faire tout ce qui est spécifié pour cette attaque.) Mew  utilise cette attaque."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rainbow Wave",
				fr: "Vague multicolore"
			},
			effect: {
				en: "Choose 1 basic Energy card attached to Mew Star. This attack does 20 damage to each of your opponent's Pokémon that is the same type as the basic Energy card that you chose. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 carte Énergie de base attachée à Mew . Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant le même type que la carte Énergie de base choisie. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
