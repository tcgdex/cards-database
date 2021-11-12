import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto"
	},
	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 60,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Protection",
				fr: "Protection ancienne"
			},
			effect: {
				en: "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.",
				fr: "Vos Amonita, Amonistar, Kabuto, Kabutops et Kabutops ex ne possèdent pas de Faiblesse."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Kabuto par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
