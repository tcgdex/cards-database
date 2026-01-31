import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Aerodactyl ex",
		fr: "Ptera ex",
		de: "Aerodactyl ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Lock",
				fr: "Serrure primordiale",
				de: "Urzeitschloss"
			},
			effect: {
				en: "As long as Aerodactyl ex is in play, your opponent can't play Pokémon Tool cards. Remove any Pokémon Tool cards attached to your opponent's Pokémon and put them into his or her discard pile.",
				fr: "Tant que Ptera ex est en jeu, votre adversaire ne peut pas jouer de cartes Outil Pokémon. Retirez toutes les cartes Outil Pokémon aux Pokémon de votre adversaire et défaussez-les.",
				de: "Solange sich Aerodactyl ex im Spiel befindet, kann dein Gegner keine Pokémon-Ausrüstungs-Karten spielen. Entferne alle Pokémon-Ausrüstungs-Karten, die an den gegnerischen Pokémon angelegt sind und lege sie auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				de: "Superschall"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
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
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275871,
		tcgplayer: 83473
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
