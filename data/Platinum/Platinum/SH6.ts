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
				de: "Find Wildfire"
			},
			effect: {
				en: "Search your deck for up to 2 Fire Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Fire. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2  Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Brushfire",
				fr: "Feu de broussailles",
				de: "Brushfire"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Grass Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc Grass de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 10 damage to each of your opponent's Benched  Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
				de: "Inflame"
			},
			effect: {
				en: "Discard a Fire Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
				de: "Discard a  Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)"
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



}

export default card
