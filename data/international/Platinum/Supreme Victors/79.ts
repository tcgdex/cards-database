import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [369],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Grand Swell",
				'fr-fr': "Forte houle",
				'de-de': "Großer Brecher"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon for each Pokémon Tool and Stadium card your opponent has in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts pour chaque carte Outil Pokémon et carte Stade que votre adversaire a en jeu. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte für jede Pokémon-Ausrüstung und jede Stadion-Karte, die dein Gegner im Spiel hat, zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann im nächsten Zug deines Gegners den gewählten Angriff nicht einsetzen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88688,
				cardmarket: 278770
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278690,
				tcgplayer: 88688
			}
		},
	],

}

export default card
