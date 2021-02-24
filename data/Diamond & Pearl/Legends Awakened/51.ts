import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Castform Sunny Form",
		fr: "Morpheo Soleil",
	},
	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
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
				en: "Temperament",
				fr: "Tempérament",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Sunny Form. (Any cards attached to Castform Sunny Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Sunny Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Soleil. (Toutes les cartes attachées à Morpheo Soleil, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Soleil à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
			},
			effect: {
				en: "Discard a Fire Energy attached to Castform Sunny Form.",
				fr: "Défaussez une Énergie Fire attachée à Morpheo Soleil.",
			},
			damage: 40,

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
