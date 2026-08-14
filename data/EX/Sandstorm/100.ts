import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wailord ex",
		fr: "Wailord ex",
		de: "Wailord ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [321],

	hp: 200,

	stage: "Stage1",
	types: [
		"Water"
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		de: "Wailmer"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Deep Dive",
				fr: "Super gros plongeon",
				de: "Super Tieftaucher"
			},
			effect: {
				en: "If you don't have any Benched Pokémon, this attack does nothing. Remove 3 damage counters from Wailord ex. Switch Wailord ex with 1 of your Benched Pokémon.",
				fr: "Si vous n'avez pas de Pokémon sur votre Banc, cette attaque est sans effet. Retirez à Wailord ex trois marqueurs de dégât. Échangez Wailord ex contre un des Pokémon de votre Banc.",
				de: "Falls du keine Pokémon auf der Bank hast, hat dieser Angriff keine Auswirkungen. Entferne 3 Schadensmarken von Wailord ex. Tausche Wailord ex gegen 1 der Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague diminutrice",
				de: "Schwindende Welle"
			},
			effect: {
				en: "Does 100 damage minus 10 damage for each damage counter on Wailord ex.",
				fr: "Inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Wailord ex.",
				de: "Fügt 100 Schadenspunkte minus der Anzahl der Schadensmarken, die auf Wailord ex liegen, zu."
			},
			damage: "100-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 5,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90463,
				cardmarket: 275877
			}
		},
	]
}

export default card
