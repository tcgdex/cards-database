import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
		de: "Zygarde-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 200,
	types: [
		"Fighting",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cell Connector",
				fr: "Connecteur de Cellules",
				de: "Zellenanschluss"
			},
			effect: {
				en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
				de: "Lege 2 {F}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land's Wrath",
				fr: "Force Chtonienne",
				de: "Bodengewalt"
			},

			damage: 130,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Verdict-GX",
				fr: "Verdict-GX",
				de: "Urteilsspruch-GX"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX et de Pokémon-EX pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Pokémon-GX und Pokémon-EX zugefügt wird. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
