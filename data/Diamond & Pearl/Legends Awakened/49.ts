import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Castform Rain Form",
		fr: "Morpheo Pluie",
		de: "Formeo Regenform"
	},

	illustrator: "Emi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperament",
				fr: "Tempérament",
				de: "Temperament"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Rain Form. (Any cards attached to Castform Rain Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Rain Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer beliebigen Formeo-Karte durchsuchen und gegen Formeo Regenform austauschen. (Alle an Formeo Regenform angelegten Karten, Schadensmarken, Speziellen Zustände und anderen Effekte werden auf das neue Pokémon übertragen.) Wenn du das machst, lege Formeo Regenform auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Temperament Poké-Power pro Zug benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				de: "Aquawelle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Son aspect change avec la météo. On a récemment découvert que ses molécules étaient pareilles à l'eau."
	},

	thirdParty: {
		cardmarket: 278198
	}
}

export default card
