import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Mewtwo δ",
		fr: "Mewtwo δ",
		de: "Mewtu"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 70,

	types: [
		"Fire",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Switch",
				fr: "Échange Delta",
				de: "Delta Switch"
			},
			effect: {
				en: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to your other Pokémon (excluding Mewtwo) in any way you like.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Mewtwo de votre main sur votre Banc, vous pouvez déplacer autant de cartes Énergie de base attachées à vos Pokémon que vous voulez sur vos autres Pokémon (Mewtwo excepté) de la façon que vous voulez.",
				de: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to your other Pokémon (excluding Mewtwo) in any way you like."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d'énergie",
				de: "Energieausbruch"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to Mewtwo and the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre total d'Énergie attachées à Mewtwo et au Pokémon Défenseur.",
				de: "Dieser Angriff fügt für jede Energie, die an Mewtu und dem Verteidigenden Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276775
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
