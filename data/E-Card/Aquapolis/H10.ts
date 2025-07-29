import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Eggsplosion",
				fr: "Super éclate",
				de: "Super-Eggsplosion"
			},
			effect: {
				en: "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
				fr: "Vous pouvez vous défausser de n'importe quel nombre de cartes Énergie attachées n'importe lequel de vos Pokémon. Lancez un nombre de pièces égal au nombre de cartes Énergie que vous avez défaussé de cette manière. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				de: "Lege eine beliebige Anzahl an beliebige deiner Pokémon angelegte Energiekarten auf deinen Ablagestapel. Wirf eine Anzahl Münzen gleich der Anzahl der auf diese Weise abgelegten Energiekarten. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40x",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Called Shot",
				fr: "Tir légal",
				de: "Angesagter Treffer"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon)",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire. Cette attaque inflige 10 dégâts multipliés par la quantité d'Énergie  attachée à Noadkoko. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Wähle 1 der Pokémon auf der Bank deines Gegners. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an -Energie, die an Kokowei angelegt ist, zu. ( Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275051
	}
}

export default card
