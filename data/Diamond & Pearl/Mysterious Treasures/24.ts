import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 90,

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
				en: "String Bomb",
				fr: "Bombe en chaîne"
			},
			effect: {
				en: "Flip a coin for each basic Energy card attached to Exeggutor and to the Defending Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Carte Énergie de base attachée à Noadkoko et au Pokémon Défenseur. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Nutritional Support",
				fr: "Support nutritionnel"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		fr: "On l'appelle \" jungle sur pattes \". Si une tête devient trop grosse, elle tombe et produit un Noeunoeuf"
	}
}

export default card
