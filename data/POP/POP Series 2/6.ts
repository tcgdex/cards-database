import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		de: "Bisaflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wide Solarbeam",
				fr: "« Grand rayon solaire »",
				de: "Geteilter Solarstrahl"
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 2 gegnerischen Pokémon auf der Bank (1 wenn nur 1 vorhanden ist) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hard Plant",
				fr: "« Herbe forte »",
				de: "Steinharte Pflanze"
			},
			effect: {
				en: "Venusaur can't use Hard Plant during your next turn.",
				fr: "Florizarre ne peut pas utiliser Herbe forte lors de votre prochain tour.",
				de: "Bisaflor kann Steinharte Pflanze in deinem nächsten Zug nicht benutzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90317,
				cardmarket: 277437
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90317,
				cardmarket: 277437
			},
		},
	],

}

export default card
