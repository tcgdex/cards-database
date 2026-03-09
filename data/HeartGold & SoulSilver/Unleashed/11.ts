import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "sui",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
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
			damage: "20x",

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
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
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
		en: "In South America, it is said that its right eye sees the future and its left eye views the past."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cracked-ice"
		}
	],

	thirdParty: {
		cardmarket: 279167,
		tcgplayer: 90666
	}
}

export default card
