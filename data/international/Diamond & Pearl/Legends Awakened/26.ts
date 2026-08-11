import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Deoxys Speed Forme",
		'fr-fr': "Deoxys Forme Vitesse",
		'de-de': "Deoxys Initiativform"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Form Change",
				'fr-fr': "Changement de forme",
				'de-de': "Gestaltwandel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Speed Forme. (Any cards attached to Deoxys Speed Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Speed Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Vitesse. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Vitesse au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer beliebigen Deoxys-Karte durchsuchen und gegen Deoxys Speedform austauschen. (Alle an Deoxys Speedform angelegten Karten, Schadensmarken, Speziellen Zustände und anderen Effekte werden auf das neue Pokémon übertragen.) Wenn du das machst, lege Deoxys Speedform auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Gestaltwandel Poké-Power pro Zug benutzen."
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
				'en-us': "Speed Shot",
				'fr-fr': "Coup d'boost",
				'de-de': "Temposchuss"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
		'fr-fr': "Il vient d'un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique."
	},

	thirdParty: {
		cardmarket: 278175,
		tcgplayer: 84779
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
