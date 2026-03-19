import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		de: "Pinsir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shining Horn",
				fr: "Corne brillante",
				de: "Glänzendes Horn"
			},
			effect: {
				en: "As long as Pinsir is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
				fr: "Tant que Scarabrute est le seul Pokémon que vous ayez en jeu, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				de: "Solange Pinsir das einzige Pokémon ist, das du im Spiel hast, können die Basis-Pokémon deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cry for Help",
				fr: "Appel à l'aide",
				de: "Hilfeschrei"
			},
			effect: {
				en: "Search your deck for a Grass Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einem -Pokémon (außer Pokémon-ex), zeige es deinem Gegner und nimm es auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Overhead Toss",
				fr: "Soulève'korne",
				de: "Überkopfwurf"
			},
			effect: {
				en: "Does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 deiner Pokémon auf der Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276901,
		tcgplayer: 88136
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
