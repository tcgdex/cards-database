import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Dialga",
		de: "Arceus"
	},

	illustrator: "Kunihiko Yuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Judgment",
				fr: "Jugement",
				de: "Urteilskraft"
			},
			effect: {
				en: "Discard all Energy cards attached to Arceus and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les cartes Énergie attachées à Arceus. Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Entferne alle an Arceus angelegte Energiekarten und lege sie auf deinen Ablagestapel; dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "On dit que son œuf a éclos dans le néant et qu'il est à l'origine de la création du monde."
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			size: "jumbo"
		}
	],
}

export default card
