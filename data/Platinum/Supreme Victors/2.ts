import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Blaziken FB",
		fr: "Brasegali ",
		de: "Lohgock FB"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Luring Flame",
				fr: "Flamme attrayante",
				de: "Verlockende Flamme"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Vapor Kick",
				fr: "Coup de buée",
				de: "Dampfkick"
			},
			effect: {
				en: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.",
				fr: "Si votre adversaire possède des Pokémon Water en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]



}

export default card
