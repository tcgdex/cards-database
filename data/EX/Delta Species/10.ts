import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Marowak δ",
		fr: "Ossatueur δ",
		de: "Knogga"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 80,

	types: [
		"Fighting",
		"Metal",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Energy Bone",
				fr: "Énergie-os",
				de: "Energieknochen"
			},
			effect: {
				en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them.",
				fr: "Vous pouvez choisir autant de Pokémon de votre adversaire qu'il y a d'Énergie attachée à Ossatueur. Cette attaque inflige 20 dégâts à chacun de ces Pokémon.",
				de: "Wähle eine Anzahl gegnerischer Pokémon, die maximal der Anzahl der an Knogga angelegten Energiekarten entspricht. Dieser Angriff fügt jedem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Crusher",
				fr: "Écrase-métal",
				de: "Metallzermalmer"
			},
			effect: {
				en: "If the Defending Pokémon is Metal Pokémon, this attack's base damage is 90.",
				fr: "Si le Pokémon Défenseur est un Pokémon , les dégâts de base de cette attaque sont de 90.",
				de: "Wenn das Verteidigende Pokémon ein -Pokémon ist, fügt dieser Angriff 90 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276773
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
