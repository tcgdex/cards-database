import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
		de: "Arceus"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],
	
	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
				de: "Preiszähler"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 60 more damage.",
				fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
				de: "Wenn du mehr Preise übrig hast als dein Gegner, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278861
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
