import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Devastating Wind",
				fr: "Vent Dévastateur",
			},
			effect: {
				en: "Your opponent shuffles their hand into their deck and draws 3 cards.",
				fr: "Votre adversaire mélange sa main avec son deck et pioche 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
