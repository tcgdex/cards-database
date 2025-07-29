import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crobat",
		de: "Iksbat"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Golbat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat's type (color) becomes the same as that type of energy until the end of the turn.",
				de: "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Iksbat anlegst, ändert sich Iksbats Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],

			name: {
				en: "Poison Flame",
				de: "Giftflamme"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned and Poisoned.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verbrannt und vergiftet."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Squared Attack",
				de: "Vierseiten-Angriff"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275245
	}
}

export default card
