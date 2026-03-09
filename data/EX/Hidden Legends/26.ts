import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Sunny Castform",
		fr: "Morpheo Soleil",
		de: "Sonnen Formeo"
	},

	illustrator: "Sumiyoshi Kizuki",
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
				en: "Temperamental Weather",
				fr: "Météo capricieuse",
				de: "Temperamental Weather"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo Soleil. (Toutes les cartes attachées à Morpheo Soleil, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Soleil à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				de: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Sunshine",
				fr: "Soleil",
				de: "Sunshine"
			},
			effect: {
				en: "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez une carte Stade dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sunburn",
				fr: "Coud'soleil",
				de: "Sunburn"
			},
			effect: {
				en: "If High Pressure System is in play, the Defending Pokémon is now Burned.",
				fr: "Si Système à haute pression est en jeu, le Pokémon Défenseur est maintenant Brûlé.",
				de: "If High Pressure System is in play, the Defending Pokémon is now Burned."
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

	thirdParty: {
		cardmarket: 276100,
		tcgplayer: 89623
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
