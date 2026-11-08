import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'de-de': "Ambidiffel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Influence",
				'fr-fr': "Effet queue",
				'de-de': "Schweifeinwirkung"
			},
			effect: {
				'en-us': "Your opponent flips a coin until he or she gets heads. For each tails, remove an Energy card attached to the Defending Pokémon and put it on the bottom of your opponent's deck.",
				'fr-fr': "Votre adversaire lance une pièce jusqu'à ce qu'il ou elle obtienne face. Pour chaque pile, retirez une carte Énergie attachée au Pokémon Défenseur et placez-la au dessous du deck de votre adversaire.",
				'de-de': "Dein Gegner wirft so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Kopf\" kommt. Für jedes Mal, wenn die Münze \"Zahl\" gezeigt hat, lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, unter das Deck deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Charity Tail",
				'fr-fr': "Queue charitable",
				'de-de': "Gnädiger Schweif"
			},
			effect: {
				'en-us': "Before Ambipom does damage, your opponent may discard 2 cards from his or her hand. If he or she does, this attack's base damage is 10 instead of 80.",
				'fr-fr': "Avant que Capidextre n'inflige des dégâts, votre adversaire peut défausser 2 cartes de sa main. Les dégâts de base de cette attaque sont alors de 10 au lieu de 80.",
				'de-de': "Bevor Ambidiffel Schaden zufügt, kann dein Gegner 2 Karten von seiner Hand auf seinen Ablagestapel legen. Wenn er das macht, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 80 Schadenpunkten."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "To eat, it deftly shucks nuts with its two tails. It rarely uses its arms now.",
		'fr-fr': "Il se nourrit de noix qu'il épluche avec ses deux queues habiles. Il utilise de moins en moins ses bras."
	},

	thirdParty: {
		cardmarket: 277632,
		tcgplayer: 83526
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
