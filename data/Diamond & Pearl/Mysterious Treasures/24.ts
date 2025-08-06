import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
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
				fr: "Bombe en chaîne",
				de: "Fadenbombe"
			},
			effect: {
				en: "Flip a coin for each basic Energy card attached to Exeggutor and to the Defending Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Carte Énergie de base attachée à Noadkoko et au Pokémon Défenseur. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 1 Münze für jede an Kokowei und das Verteidigende Pokémon angelegte Basis-Energiekarte. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Nutritional Support",
				fr: "Support nutritionnel",
				de: "Nahrungsversorgung"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
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
	},

	thirdParty: {
		cardmarket: 277653,
		tcgplayer: 85360
	}
}

export default card
