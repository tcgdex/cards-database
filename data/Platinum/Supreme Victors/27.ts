import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Empoleon FB",
		fr: "Pingoléon ",
		de: "Impoleon FB"
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rushing Water",
				fr: "Courant fort",
				de: "Starke Strömung"
			},
			effect: {
				en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				de: "Entferne 1 an das Verteidigende Pokémon angelegte Energiekarte und lege sie an 1 anderes Pokémon deines Gegners an."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Escort",
				fr: "Escorter",
				de: "Eskorte"
			},
			effect: {
				en: "If you played any Supporter card from your hand during this turn, this attack does 40 damage plus 20 more damage.",
				fr: "Si vous jouez une carte Supporter de votre main lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn du in diesem Zug mindestens 1 Unterstützerkarte von deiner Hand gespielt hast, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
