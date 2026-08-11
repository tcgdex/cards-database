import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Sunny Castform",
		'fr-fr': "Morpheo Soleil",
		'de-de': "Sonnenschein Formeo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Temperamental Weather",
				'fr-fr': "Météo capricieuse",
				'de-de': "Temperamental Weather"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo Soleil. (Toutes les cartes attachées à Morpheo Soleil, les marqueurs de dégât, les États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Soleil à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				'de-de': "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Holon Search",
				'fr-fr': "Recherche Holon",
				'de-de': "Holon Search"
			},
			effect: {
				'en-us': "Search your deck for a Holon Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Holon et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Holon Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276794,
		tcgplayer: 89624
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

