import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'de-de': "Magbrant"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Flame Body",
				'fr-fr': "Corps ardent",
				'de-de': "Flammkörper"
			},
			effect: {
				'en-us': "When you attach a Fire Energy card from your hand to Magmortar, remove 2 damage counters from Magmortar.",
				'fr-fr': "Lorsque vous attachez une carte Énergie Fire de votre main à Maganon, retirez à Maganon 2 marqueurs de dégât.",
				'de-de': "Wenn du 1 -Energiekarte von der Hand an Magbrant anlegst, entferne 2 Schadensmarken von Magbrant."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Blast",
				'fr-fr': "Explosion de flammes",
				'de-de': "Flammenschuss"
			},
			effect: {
				'en-us': "Does 20 damage times the number of Fire Energy attached to Magmortar.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies Fire attachées à Maganon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Magbrant angelegten -Energien zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fireball Bazooka",
				'fr-fr': "Boule de feu bazooka",
				'de-de': "Feuerball-Bazooka"
			},
			effect: {
				'en-us': "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It blasts fireballs of over 3,600 degrees F from the ends of its arms. It lives in volcanic craters.",
	},

	thirdParty: {
		cardmarket: 277784,
		tcgplayer: 87056
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cosmos"
		},
	]
}

export default card
