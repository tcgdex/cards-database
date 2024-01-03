import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morpheo",
		de: "Formeo"
	},

	illustrator: "Kanako Eo",
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
				en: "Temperament",
				fr: "Tempérament",
				de: "Temperament"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Castform on top of your deck. Shuffle your deck afterward. You can't use more than 1 Temperament Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo. (Toutes les cartes attachées à Morpheo, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Morpheo au dessus de votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer beliebigen Formeo-Karte durchsuchen und gegen Formeo austauschen. (Alle an Formeo angelegten Karten, Schadensmarken, Speziellen Zustände und anderen Effekte werden auf das neue Pokémon übertragen.) Wenn du das machst, lege Formeo auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Temperament Poké-Power pro Zug benutzen."
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
				en: "Weather Ball",
				fr: "Ball'météo",
				de: "Meterologe"
			},
			effect: {
				en: "If you have a Stadium card in play, remove 3 damage counters from Castform. If your opponent has a Stadium card in play, this attack does 30 damage plus 30 more damage.",
				fr: "Si vous avez des cartes Stade en jeu, retirez à Morpheo 3 marqueurs de dégât. Si votre adversaire a des cartes Stade en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn du 1 Stadion-Karte im Spiel hast, entferne 3 Schadensmarken von Formeo. Wenn dein Gegner 1 Stadion-Karte im Spiel hat, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Son aspect change avec la météo. On a récemment découvert que ses molécules étaient pareilles à l'eau."
	}
}

export default card
