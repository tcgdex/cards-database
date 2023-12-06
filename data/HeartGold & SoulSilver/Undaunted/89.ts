import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
		de: "Rayquaza & Deoxys LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 140,

	types: [
		"Colorless",
		"Psychic",
	],

	suffix: "Legend",

	attacks: [
		{
			name: {
				fr: "",
				de: "Ozonsprenger"
			},

			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Rayquaza & Deoxys LÉGENDE.",
				de: "Lege alle -Energien, die an Rayquaza & Deoxys-LEGENDE angelegt sind, auf deinen Ablagestapel."
			},

			damage: 150,
			cost: ["Fire", "Fire", "Lightning", "Colorless"]
		},
	],

	stage: "Basic",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	abilities: [{
		name: {
			de: "Weltraumvirus"
		},

		effect: {
			de: "Wenn ein Pokémon deines Gegners durch Schaden eines Angriffs von Rayquaza & Deoxys-LEGENDE kampfunfähig gemacht wurde, nimm 1 zusätzlichen Preis."
		}
	}]
}

export default card
