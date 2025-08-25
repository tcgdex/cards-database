import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Outbreak Power",
				fr: "Éruption de pouvoir",
				de: "Kraftausbruch"
			},
			effect: {
				en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Steelix. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez autant de Pokémon de votre adversaire qu'il y a d'Énergie attachée à Steelix. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle eine Anzahl gegnerischer Pokémon, die höchstens der Anzahl der an Stahlos angelegten Energien entspricht. Dieser Angriff fügt jedem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de fer",
				de: "Eisenschweif"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 100 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 100 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "100x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Grâce à la température élevée et la haute pression souterraine, son corps est plus dur que le métal."
	},

	thirdParty: {
		cardmarket: 278326,
		tcgplayer: 89562
	}
}

export default card
