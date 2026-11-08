import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'de-de': "Schilterus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Armor Fossil",
		'fr-fr': "Fossile armure"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hard Face",
				'fr-fr': "Visage dur",
				'de-de': "Harte Oberfläche"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Shieldon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Dinoclier par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Schilterus durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shield Attack",
				'fr-fr': "Attaque de bouclier",
				'de-de': "Schildattacke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A Pokémon that lived in jungles around 100 million years ago. Its facial hide is extremely hard.",
		'fr-fr': "Un Pokémon qui vivait dans la jungle il y a 100 millions d'années. Son visage est très dur."
	},

	thirdParty: {
		cardmarket: 277692,
		tcgplayer: 89149
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
