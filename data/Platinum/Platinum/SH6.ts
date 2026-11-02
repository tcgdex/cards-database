import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Find Wildfire",
				fr: "Traqueur de feu de forêt",
				de: "Lauffeuer finden"
			},
			effect: {
				en: "Search your deck for up to 2 Fire Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Fire. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 {R}-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Brushfire",
				fr: "Feu de broussailles",
				de: "Buschfeuer"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Grass Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc Grass de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem {G}-Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Inflame",
				fr: "Mettre le feu",
				de: "Entflammen"
			},
			effect: {
				en: "Discard a Fire Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
				de: "Lege 1 {R}-Energiekarte von deiner Hand auf deinen Ablagestapel. (Wenn du das nicht machen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278420,
				tcgplayer: 90443
			},
		}
	]
}

export default card
