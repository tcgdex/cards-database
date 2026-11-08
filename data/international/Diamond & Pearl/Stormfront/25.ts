import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Honeycomb Defender",
				'fr-fr': "Défenseur de nid d'abeille",
				'de-de': "Wabenverteidiger"
			},
			effect: {
				'en-us': "If Scizor has 6 or more damage counters on it, any damage done to Scizor by attacks is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Si Cizayox possède au moins 6 marqueurs de dégât, tous dégâts infligés à Cizayox par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange auf Scherox mindestens 6 Schadensmarken liegen, wird Schaden, der Scherox durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Accelerate",
				'fr-fr': "Accélérer",
				'de-de': "Beschleunigen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Knocked Out by this attack, prevent all effects of an attack, including damage, done to Scizor during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O par cette attaque, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cizayox lors du prochain tour de votre adversaire.",
				'de-de': "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Scherox zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Pound Down",
				'fr-fr': "Mettre en bouillie",
				'de-de': "Niederschmettern"
			},
			effect: {
				'en-us': "If you don't have any Pokémon with any Poké-Powers in play, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Si vous n'avez pas de Pokémon possédant des Poké-Powers en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn keines deiner Pokémon im Spiel eine Poké-Power hat, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278323,
		tcgplayer: 88962
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
