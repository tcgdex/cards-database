import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morpheo",
		de: "Formeo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 60,

	types: [
		"Colorless",
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
				en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo Soleil, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo. (Toutes les cartes attachées à Morpheo, les marqueurs de dégât, les États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				de: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Holon Draw",
				fr: "Pioche Holon",
				de: "Holon Draw"
			},
			effect: {
				en: "Draw a card. If Castform has any Holon Energy cards attached to it, draw 2 more cards.",
				fr: "Piochez une carte. Si Morpheo possède des cartes Énergie Holon, piochez 2 cartes supplémentaires.",
				de: "Draw a card. If Castform has any Holon Energy cards attached to it, draw 2 more cards."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276797,
		tcgplayer: 84127
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

