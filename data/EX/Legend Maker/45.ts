import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		de: "Tentoxa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
		de: "Tentacha"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Shield",
				fr: "Bouclier réactif",
				de: "Reaktiver Schild"
			},
			effect: {
				en: "As long as Tentacruel has any React Energy cards attached to it, prevent all effects, including damage, done to any of your Tentacruel in play by attacks from your opponent's Pokémon-ex.",
				fr: "Tant que Tentacruel possède des cartes Énergie réaction, prévenez tous les effets, dégâts inclus, infligés par des attaques de Pokémon-ex de votre adversaire aux Tentacruels que vous avez en jeu",
				de: "Solange an Tentoxa mindestens eine Reaktions-Energiekarte angelegt ist, verhindere alle Effekte, inklusive Schaden, die deinen Tentoxa im Spiel durch Angriffe der Pokémon-ex deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau",
				de: "Wasserpfeil"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Strikes",
				fr: "Attaques furieuses",
				de: "Zornschläge"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276922,
		tcgplayer: 89876
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		}
	]
}

export default card
