import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Empoleon FB",
		'fr-fr': "Pingoléon ",
		'de-de': "Impoleon FB"
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [395],
	hp: 90,
	types: [
		"Water"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rushing Water",
				'fr-fr': "Courant fort",
				'de-de': "Starke Strömung"
			},
			effect: {
				'en-us': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				'de-de': "Entferne 1 an das Verteidigende Pokémon angelegte Energiekarte und lege sie an 1 anderes Pokémon deines Gegners an."
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
				'en-us': "Escort",
				'fr-fr': "Escorter",
				'de-de': "Eskorte"
			},
			effect: {
				'en-us': "If you played any Supporter card from your hand during this turn, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si vous jouez une carte Supporter de votre main lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn du in diesem Zug mindestens 1 Unterstützerkarte von deiner Hand gespielt hast, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278718,
				tcgplayer: 85205
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278718,
				tcgplayer: 85205
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371554,
				tcgplayer: 164155
			}
		},
	],

}

export default card
