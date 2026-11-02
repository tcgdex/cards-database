import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Charizard-GX",
		fr: "Dracaufeu-GX",
		de: "Glurak-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 250,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				de: "Flügelschlag"
			},

			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crimson Storm",
				fr: "Tempête Écarlate",
				de: "Feuerroter Sturm"
			},
			effect: {
				en: "Discard 3 Fire Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
				de: "Lege 3 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Out-GX",
				fr: "Déchaînement Furieux-GX",
				de: "Tobsuchtsanfall-GX"
			},
			effect: {
				en: "Discard the top 10 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Lege die obersten 10 Karten des Decks deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
