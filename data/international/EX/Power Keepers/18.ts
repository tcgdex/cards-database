import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyena",
		'de-de': "Magnayen"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plunder",
				'fr-fr': "Pillage",
				'de-de': "Plündern"
			},
			effect: {
				'en-us': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				'de-de': "Bevor der Schaden zugefügt wird, lege alle an dem Verteidigenden Pokémon angelegten Trainerkarten auf den Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Burst",
				'fr-fr': "Explosion obscure",
				'de-de': "Dunkler Ausbruch"
			},
			effect: {
				'en-us': "If Sidney's Stadium is in play, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si Stade de Damien est en jeu, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn Ulrichs Stadion im Spiel ist, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277324,
		tcgplayer: 87446
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
