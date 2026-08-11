import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'de-de': "Schlurplek"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [463],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Licking Shot",
				'fr-fr': "Léchouille",
				'de-de': "Schleckschuss"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon for each Energy attached to Lickilicky. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon pour chaque carte Énergie attachée à Coudlangue. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte für jede an Schlurplek angelegte Energie zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stick and Absorb",
				'fr-fr': "Colle et absorbe",
				'de-de': "Festkleben und Einsaugen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Lickilicky. The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Retirez 2 marqueurs de dégât à Coudlangue. Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Entferne 2 Schadensmarken von Schlurplek. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has space in its throat to store saliva. It can also roll up its tongue and store it in the same spot."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86714,
				cardmarket: 279568
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279568,
				tcgplayer: 86714
			}
		},
	],

}

export default card
