import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Statoss"
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Core Guard",
				fr: "Protection principale"
			},
			effect: {
				en: "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tant que Statoss possède une Énergie , les dégâts qui lui sont infligés par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Flip",
				fr: "Échange d'énergie"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Energy attached to that Pokémon to another of your opponent's Pokémon.",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Vous pouvez déplacer une Énergie attachée à ce Pokémon à un autre Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
