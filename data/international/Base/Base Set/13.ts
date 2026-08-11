import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'de-de': "Quappo",
		'it-it': "Poliwrath"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'it-it': "Poliwhirl"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Aquaknarre",
				'it-it': "Pistolacqua"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Tartard en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				'de-de': "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Quappo abgelegte  Energiekarte zu, die nicht zum Zahlen der Energiekosten füür diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen.",
				'it-it': "Infligge 30 danni più altri 10 danni per ogni carta Energia Acqua assegnata a Poliwrath che non viene usata per pagare il costo di Energia di questo attacco. Altre carte Energia Acqua dopo la 2ª non contano."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Lessiveuse",
				'de-de': "Strudel",
				'it-it': "Mulinello"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.",
				'fr-fr': "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la.",
				'de-de': "Sind auf dem verteidigenden Pokémon Energiekarten abgelegt, wähle eine von ihnen und entferne sie.",
				'it-it': "Se sono state assegnate carte Energia al Pokémon Difensore, scegline una e scartala."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.",
		'fr-fr': "Excellent nageur, il pratique le crawl ou la nage papillon mieux qu'un champion olympique.",
		'it-it': "Abile nuotatore sia nel crawl sia a rana. Supera con facilità qualsiasi nuotatore di razza umana. LIV 48 N.62"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273708,
				tcgplayer: 42353
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 107007,
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 107007,
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	]
}

export default card
