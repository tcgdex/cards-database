import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Even Game",
				fr: "Partie équilibrée",
				de: "Ausgeglichenes Spiel"
			},
			effect: {
				en: "Count the number of your opponent's Pokémon. Search your deck for up to that number of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Comptabilisez le nombre de Pokémon de votre adversaire. Choisissez dans votre deck autant de Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Zähle die Anzahl der gegnerischen Pokémon. Durchsuche dein Deck nach bis zu dieser Anzahl Basis-Pokémon-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stadium Play",
				fr: "Jeu de stade",
				de: "Stadionspiel"
			},
			effect: {
				en: "If you have a Stadium card in play, remove 1 damage counter from each of your Pokémon. If your opponent has a Stadium card in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous possédez une carte Stade en jeu, retirez 1 marqueur de dégât à chacun de vos Pokémon. Si votre adversaire possède une carte Stade en jeu, cette attaque inflige 10 dégâts à chacun des Pokémon de son Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wenn du 1 Stadion-Karte im Spiel hast, entferne 1 Schadensmarke von jedem deiner Pokémon. Wenn dein Gegner 1 Stadion-Karte im Spiel hat, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277088,
		tcgplayer: 86935
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
