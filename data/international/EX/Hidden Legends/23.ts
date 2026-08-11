import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Rain Castform",
		'fr-fr': "Morpheo Pluie",
		'de-de': "Regen Formeo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [351],

	hp: 60,

	types: [
		"Water"
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
				'en-us': "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Soleil ou Morpheo Neige et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				'de-de': "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Scattered Shower",
				'fr-fr': "Douche à basse pression",
				'de-de': "Scattered Shower"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Draw up to 5 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Piochez jusqu'à 5 cartes.",
				'de-de': "Shuffle your hand into your deck. Draw up to 5 cards."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainy Day Blues",
				'fr-fr': "Blues de jour de pluie",
				'de-de': "Rainy Day Blues"
			},
			effect: {
				'en-us': "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
				'fr-fr': "Si Système à basse pression est en jeu, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If Low Pressure System is in play, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88543,
				cardmarket: 276097
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 88543,
				cardmarket: 276097
			}
		},
	]
}

export default card
