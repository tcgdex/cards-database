import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
		de: "Rayquaza & Deoxys LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "LEGEND",
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
				de: "Weltraumvirus"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par une attaque de Rayquaza & Deoxys LÉGENDE, prenez une carte Récompense supplémentaire.",
				de: "Wenn ein Pokémon deines Gegners durch Schaden eines Angriffs von Rayquaza & Deoxys-LEGENDE kampfunfähig gemacht wurde, nimm 1 zusätzlichen Preis."
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
				de: 'Ozonsprenger'
			},
			effect: {
				en: "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
				fr: "Défaussez toutes les cartes Énergie Fire attachées à Rayquaza & Deoxys LÉGENDE.",
				de: 'Lege alle -Energien, die an Rayquaza & Deoxys-LEGENDE angelegt sind, auf deinen Ablagestapel.  '
			},
			damage: 150,

		}
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

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["david-cohen"]
		}
	],

	hp: 140,

	thirdParty: {
		cardmarket: 279342
	}
}

export default card
