import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Finneon",
		'fr-fr': "Ecayon",
		'de-de': "Finneon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		456,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		'fr-fr': "Ecayon",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Aqua Liner",
				'fr-fr': "Aqua-paquebot",
				'de-de': "Wasserrohr"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Mouth Pump",
				'fr-fr': "Bouche-pompe",
				'de-de': "Maulpumpe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "After long exposure to sunlight, the patterns on its tail fins shine vividly when darkness arrives.",
		'fr-fr': "Après une longue exposition au soleil, les motifs de ses nageoires caudales luisent à la nuit tombée."
	},

	thirdParty: {
		cardmarket: 278359,
		tcgplayer: 85450
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
