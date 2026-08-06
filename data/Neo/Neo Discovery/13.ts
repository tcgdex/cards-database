import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],

			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},

			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de l'attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "Wähle ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 30 Schadenspunkte zu. Die Schadenspunkte aus diesem Angriff werden von Schwäche, Resistenz, Pokémon-Power oder allen anderen Effekten auf das verteidigende Pokémon nicht beeinflusst."
			},

			damage: "30+"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.",
		fr: "Quand la nuit tombe, les anneaux de son corps se mettent à luire, éveillant la peur dans le cœur de ceux qui sont dans les parages.",
		de: "Wenn es dunkel wird, fangen die Ringe in seinem Fell an zu glühen und jagen allen in der Nähe Angst ein."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90137
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90137
			}
		}
	]
}

export default card
