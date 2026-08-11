import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-nuée",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle Arm",
				'fr-fr': "Poing dard",
				'de-de': "Nietenranke"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It becomes active at night, seeking prey that is exhausted from the day's desert heat.",
	},

	thirdParty: {
		cardmarket: 277936,
		tcgplayer: 84080
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
