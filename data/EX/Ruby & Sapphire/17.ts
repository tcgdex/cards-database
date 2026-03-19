import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Reißer"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque lui inflige 40 dégâts.",
				de: "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				fr: "Double tour",
				de: "Doppeldreher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "60x",

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
		cardmarket: 275665,
		tcgplayer: 84871
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
