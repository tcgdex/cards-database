import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'fr-fr': "Voltorbe",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fastball",
				'fr-fr': "Balle rapide",
				'de-de': "Tempoball"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon.  Flip a coin.  If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Lancez une pièce. Si c'est face, cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge Beam",
				'fr-fr': "Rayon chargé",
				'de-de': "Ladestrahl"
			},
			effect: {
				'en-us': "Search your discard pile for a lightning Energy card and attach it to Voltorb.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Voltorbe.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Voltobal an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin.  If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278296
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
