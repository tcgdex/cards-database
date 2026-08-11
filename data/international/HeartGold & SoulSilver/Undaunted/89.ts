import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
		de: "Rayquaza & Deoxys LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [384, 386],
	hp: 140,

	types: [
		"Colorless",
		"Psychic"
	],

	suffix: "Legend",

	attacks: [
		{
			name: {
				en: "Ozone Buster",
				fr: "",
				de: "Ozonsprenger"
			},

			effect: {
				en: "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Rayquaza & Deoxys LÉGENDE.",
				de: "Lege alle -Energien, die an Rayquaza & Deoxys-LEGENDE angelegt sind, auf deinen Ablagestapel."
			},

			damage: 150,
			cost: ["Fire", "Fire", "Lightning", "Colorless"]
		},
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Space Virus"
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card."
			}
		},
	],
	stage: "Basic",
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279342,
				tcgplayer: 88638
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				cardmarket: 868142,
				tcgplayer: 480476
			}
		},
	],
}

export default card
