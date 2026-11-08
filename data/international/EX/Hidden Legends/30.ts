import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Castform",
		'fr-fr': "Morpheo",
		'de-de': "Formeo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [351],

	hp: 60,

	types: [
		"Colorless"
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
				'en-us': "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo Soleil, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo. (Toutes les cartes attachées à Morpheo, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				'de-de': "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Forecast",
				'fr-fr': "Prévisions météo",
				'de-de': "Forecast"
			},
			effect: {
				'en-us': "Search your deck for a Stadium card and play it. Shuffle your deck afterward.",
				'fr-fr': "Choisissez une carte Stade dans votre deck et mettez-la en jeu. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Stadium card and play it. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Ball",
				'fr-fr': "Boule suppplémentaire",
				'de-de': "Extra Ball"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84126,
				cardmarket: 276104
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84126,
				cardmarket: 276104
			}
		},
	]
}

export default card
