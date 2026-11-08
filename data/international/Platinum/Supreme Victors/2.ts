import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Blaziken FB",
		'fr-fr': "Brasegali FB",
		'de-de': "Lohgock FB"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Holo Rare",
	category: "Pokemon",

	set: Set,
	dexId: [257],
	hp: 80,
	types: [
		"Fire"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Luring Flame",
				'fr-fr': "Flamme attrayante",
				'de-de': "Verlockende Flamme"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Vapor Kick",
				'fr-fr': "Coup de buée",
				'de-de': "Dampfkick"
			},
			effect: {
				'en-us': "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si votre adversaire possède des Pokémon Water en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278693,
				tcgplayer: 83914
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278693,
				tcgplayer: 83914
			}
		},
	],

}

export default card
