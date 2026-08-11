import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dish Out",
				'fr-fr': "Distribution",
				'de-de': "Austeilen"
			},
			effect: {
				'en-us': "Draw a card from the top and the bottom of your deck.",
				'fr-fr': "Piochez une carte du dessus et du dessous de votre deck.",
				'de-de': "Ziehe die oberste und unterste Karte deines Decks."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Synchro Punch",
				'fr-fr': "Synchro-poing",
				'de-de': "Drehhieb"
			},
			effect: {
				'en-us': "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
				'fr-fr': "Si une carte Énergie attachée à Spinda est du même type qu'une carte Énergie attachée au Pokémon Défenseur, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn an Pandir mindestens 1 Basis-Energiekarte desselben Typs wie eine an das Verteidigende Pokémon angelegte Energiekarte angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "No two Spinda have the same pattern of spots. Its tottering step fouls the aim of foes.",
	},

	thirdParty: {
		cardmarket: 277864,
		tcgplayer: 89461
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
