import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	types: [
		"Colorless",
		"Psychic",
	],

	suffix: "Legend",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Space Virus",
				fr: "Virus spatial",
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par une attaque de Rayquaza & Deoxys LÉGENDE, prenez une carte Récompense supplémentaire.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Ozone Buster",
				fr: "Châtiment stellaire",
			},
			effect: {
				en: "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
				fr: "Défaussez toutes les cartes Énergie Fire attachées à Rayquaza & Deoxys LÉGENDE.",
			},
			damage: 150,

		},
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Rayquaza & Deoxys LÉGENDE.",
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 140
}

export default card
