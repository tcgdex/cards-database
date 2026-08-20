import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Turtonator-GX",
		fr: "Boumata-GX",
		de: "Tortunator-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		776,
	],
	hp: 190,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Trap",
				fr: "Carapiège",
				de: "Panzerfalle"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
				de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Nitro Tank-GX",
				fr: "Réservoir Nitro-GX",
				de: "Nitrotank-GX"
			},
			effect: {
				en: "Attach 5 Fire Energy cards from your discard pile to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Lege 5 {R}-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
