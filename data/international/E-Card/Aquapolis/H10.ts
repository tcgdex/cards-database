import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
	},

	illustrator: "Yukiko Baba",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [103],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Super Eggsplosion",
				'fr-fr': "Super éclate",
				'de-de': "Super-Eggsplosion"
			},
			effect: {
				'en-us': "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
				'fr-fr': "Vous pouvez vous défausser de n'importe quel nombre de cartes Énergie attachées n'importe lequel de vos Pokémon. Lancez un nombre de pièces égal au nombre de cartes Énergie que vous avez défaussé de cette manière. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Lege eine beliebige Anzahl an beliebige deiner Pokémon angelegte Energiekarten auf deinen Ablagestapel. Wirf eine Anzahl Münzen gleich der Anzahl der auf diese Weise abgelegten Energiekarten. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Called Shot",
				'fr-fr': "Tir légal",
				'de-de': "Angesagter Treffer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Grass Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez un des Pokémon du Banc de votre adversaire. Cette attaque inflige 10 dégâts multipliés par la quantité d'Énergie  attachée à Noadkoko. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Wähle 1 der Pokémon auf der Bank deines Gegners. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an -Energie, die an Kokowei angelegt ist, zu. ( Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85353,
				cardmarket: 275084
			}
		},
	]
}

export default card
