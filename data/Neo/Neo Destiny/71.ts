import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Ledyba",
		fr: "Coxy",
		de: "Ledyba"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		165,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "Die Schadenspunkte dieses Angriffs werden nicht durch Schwäche, Resistenz, Pokémon-Powers oder andere das verteidigende Pokémon betreffende Effekte beeinflusst."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Sensitive to cold, Ledyba gather in groups to share warmth when the temperature drops.",
		fr: "Sensibles au froid, les Coxy se rassemblent en groupes pour partager leur chaleur quand la température descend dangereusement.",
		de: "Da sie die Kälte nicht gut vertragen, kuscheln sich Ledybas aneinander, um sich warmzuhalten, wenn die Temperatur fällt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274723,
				tcgplayer: 86700
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274723,
				tcgplayer: 86700
			}
		}
	]
}

export default card
