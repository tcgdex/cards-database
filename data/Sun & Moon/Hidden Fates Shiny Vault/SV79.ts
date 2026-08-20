import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Silvally-GX",
		fr: "Silvallié-GX",
		de: "Amigento-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
		de: "Typ:Null"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gyro Unit",
				fr: "Gyro-Unité",
				de: "Gyro-Aggregat"
			},
			effect: {
				en: "Your Basic Pokémon in play have no Retreat Cost.",
				fr: "Vos Pokémon de base en jeu n’ont pas de Coût de Retraite.",
				de: "Deine Basis-Pokémon im Spiel haben keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turbo Drive",
				fr: "Propulsion Turbo",
				de: "Turboantrieb"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rebel-GX",
				fr: "Rebelle-GX",
				de: "Rebellieren-GX"
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
