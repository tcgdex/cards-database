import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
		de: "Ambidiffel"
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
		en: "Aipom",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Influence",
				fr: "Effet queue",
				de: "Schweifeinwirkung"
			},
			effect: {
				en: "Your opponent flips a coin until he or she gets heads. For each tails, remove an Energy card attached to the Defending Pokémon and put it on the bottom of your opponent's deck.",
				fr: "Votre adversaire lance une pièce jusqu'à ce qu'il ou elle obtienne face. Pour chaque pile, retirez une carte Énergie attachée au Pokémon Défenseur et placez-la au dessous du deck de votre adversaire.",
				de: "Dein Gegner wirft so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Kopf\" kommt. Für jedes Mal, wenn die Münze \"Zahl\" gezeigt hat, lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, unter das Deck deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charity Tail",
				fr: "Queue charitable",
				de: "Gnädiger Schweif"
			},
			effect: {
				en: "Before Ambipom does damage, your opponent may discard 2 cards from his or her hand. If he or she does, this attack's base damage is 10 instead of 80.",
				fr: "Avant que Capidextre n'inflige des dégâts, votre adversaire peut défausser 2 cartes de sa main. Les dégâts de base de cette attaque sont alors de 10 au lieu de 80.",
				de: "Bevor Ambidiffel Schaden zufügt, kann dein Gegner 2 Karten von seiner Hand auf seinen Ablagestapel legen. Wenn er das macht, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 80 Schadenpunkten."
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

	description: {
		fr: "Il se nourrit de noix qu'il épluche avec ses deux queues habiles. Il utilise de moins en moins ses bras."
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
