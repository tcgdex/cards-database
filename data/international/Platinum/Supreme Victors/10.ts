import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'de-de': "Rihornior"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [464],

	hp: 140,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Raging Drill",
				'fr-fr': "Perceuse enragée",
				'de-de': "Zornbohrer"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each damage counter on Rhyperior.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Rhinastoc.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Rihornior zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deep Scrap",
				'fr-fr': "Grosse bagarre",
				'de-de': "Tiefenschrottung"
			},
			effect: {
				'en-us': "If the Defending Pokémon would be Knocked Out by this attack, discard the top 3 cards from your opponent's deck.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O. par cette attaque, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'de-de': "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,

	description: {
		'en-us': "It can launch a rock held in its hand like a missile by tightening then expanding muscles instantly."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278701,
				tcgplayer: 88746,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278701,
				tcgplayer: 88746
			}
		},
	],

}

export default card
