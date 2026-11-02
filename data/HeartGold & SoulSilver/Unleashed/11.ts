import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "sui",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [178],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
		de: "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psywave",
				fr: "Vague psy",
				de: "Psywelle"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an das Verteidigende Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "In South America, it is said that its right eye sees the future and its left eye views the past.",
		de: "In Südamerika glaubt man, dass sein rechtes Auge die Zukunft und das linke die Vergangenheit sieht."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90666,
				cardmarket: 279167
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90666,
				cardmarket: 279167
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
		}
	],

}

export default card
