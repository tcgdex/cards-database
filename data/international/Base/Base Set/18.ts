import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'de-de': "Dragonir",
		'it-it': "Dragonair"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'it-it': "Dratini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'de-de': "Slam",
				'it-it': "Schianto"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 30 Schadenspunkte zu.",
				'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl",
				'it-it': "Iper-raggio"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				'fr-fr': "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la.",
				'de-de': "Sind auf dem verteidigenden Ppkemon Energiekarten abgelegt, wähle eine von ihnen und entferne sie.",
				'it-it': "Se il Pokémon Difensore ha delle carte Energie assegnate, scegline una e scartala."
			},
			damage: 20,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273713,
				tcgplayer: 42358
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107013
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107013
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.",
		'fr-fr': "Un Pokémon légendaire plein de charme. Il peut contrôler les variations climatiques.",
		'it-it': "Pokémon mistico con un'indole gentile. Ha l'abilità di cambiare le condizioni climatiche. LIV 33 N.148"
	}
}

export default card
