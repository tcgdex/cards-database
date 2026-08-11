import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Sunny Castform",
		'fr-fr': "Morpheo Soleil",
		'de-de': "Sonnen Formeo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [351],

	hp: 70,

	types: [
		"Fire"
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
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo Soleil. (Toutes les cartes attachées à Morpheo Soleil, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Soleil à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				'de-de': "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Sunshine",
				'fr-fr': "Soleil",
				'de-de': "Sunshine"
			},
			effect: {
				'en-us': "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez une carte Stade dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sunburn",
				'fr-fr': "Coud'soleil",
				'de-de': "Sunburn"
			},
			effect: {
				'en-us': "If High Pressure System is in play, the Defending Pokémon is now Burned.",
				'fr-fr': "Si Système à haute pression est en jeu, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "If High Pressure System is in play, the Defending Pokémon is now Burned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89623,
				cardmarket: 276100
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 89623,
				cardmarket: 276100
			}
		},
	]
}

export default card
