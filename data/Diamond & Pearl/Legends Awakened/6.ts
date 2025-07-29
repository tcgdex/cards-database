import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		de: "Heatran"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flash Fire",
				fr: "Torche",
				de: "Feuerfänger"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Fire Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer sur Heatran une Énergie Fire attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Heatran est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 -Energie, die an 1 deiner Pokémon angelegt ist, an Heatran anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Heatran von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magma Storm",
				fr: "Vortex Magma",
				de: "Lavasturm"
			},
			effect: {
				en: "You may discard as many basic Energy cards as you like attached to Heatran. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie de base attachées à Heatran que vous le voulez. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie défaussée.",
				de: "Du kannst beliebig viele Basis-Energiekarten von Heatran entfernen und auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte Energiekarte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		fr: "Il hante les grottes volcaniques. Il rampe au mur et au plafond grâce à ses pieds en formes de croix."
	},

	thirdParty: {
		cardmarket: 278155
	}
}

export default card
