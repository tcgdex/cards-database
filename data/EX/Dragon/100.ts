import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 120,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Collect Fire",
				fr: "Quête du feu",
				de: "Feuersammeln"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for 2 Fire Energy cards and attach them to Charizard (1 if there is only 1).",
				fr: "Lancez une pièce. Si c'est face, cherchez dans votre pile de défausse deux cartes Énergie {R} (ou une s'il n'y en a qu'une) et attachez-les à Dracaufeu.",
				de: "Wirf 1 Münze. Durchsuche bei „Kopf“ deinen Ablagestapel nach 2 {R}-Energiekarten und lege sie an Glurak an (1 falls nur 1 vorhanden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Pillar",
				fr: "Colonne de flamme",
				de: "Flammensäule"
			},
			effect: {
				en: "You may discard a Fire Energy card attached to Charizard. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser une carte Énergie {R} attachée à Dracaufeu. Vous pouvez alors choisir un des Pokémon de Banc de votre adversaire et lui infliger 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Du darfst 1 an Glurak abgelegte {R}-Energie auf deinen Ablagestapel legen, wenn du diesen Angriff einsetzt. Wenn du das machst, wähle 1 Pokémon auf der Bank deines Gegners und dieser Angriff fügt ihm 30 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84187,
				cardmarket: 275977
			},
		},
		{
			type: "holo",
			stamp: ["national-championships"],
			thirdParty: {
				tcgplayer: 489929,
				cardmarket: 275977
			},
		},
	],

}

export default card
