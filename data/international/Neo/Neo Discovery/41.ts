import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'de-de': "Kokuna"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Secrete Poison",
				'fr-fr': "Sécrétion de poison",
				'de-de': "Giftsekret"
			},
			effect: {
				'en-us': "During your opponent's next turn, whenever your opponent's attack damages Kakuna (even if Kakuna is knocked out), your opponent's Active Pokémon is now Poisoned and Kakuna does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, quand son attaque fait des dégâts à Coconfort (même si Coconfort est K.O.), le Pokémon Actif de votre adversaire est Empoisonné et Coconfort inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance pour les Pokémon du Banc.)",
				'de-de': "Immer wenn während des nächsten Zugs deines gegners der Angriff deines gegners Kokuna Schaden zufügt (selbst wenn Kokuna kampfunfähig ist), ist das verteidigende Pokémon deines Gegners dann vergiftet und Kokuna fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Although it is a cocoon, it can move a little. It can extend its poison barb if it is attacked.",
		'fr-fr': "Même si c'est un cocon, il peut bouger un peu. Il peut allonger ses pointes empoisonnées s'il est attrapé."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274552,
				tcgplayer: 86408
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274552,
				tcgplayer: 86408
			}
		}
	]
}

export default card

