import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Aerodactyl ex",
		'fr-fr': "Ptera ex",
		'de-de': "Aerodactyl ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [142],

	hp: 100,

	stage: "Stage1",
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Mysterious Fossil",
		'fr-fr': "Mystérieux fossile"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Lock",
				'fr-fr': "Serrure primordiale",
				'de-de': "Urzeitschloss"
			},
			effect: {
				'en-us': "As long as Aerodactyl ex is in play, your opponent can't play Pokémon Tool cards. Remove any Pokémon Tool cards attached to your opponent's Pokémon and put them into his or her discard pile.",
				'fr-fr': "Tant que Ptera ex est en jeu, votre adversaire ne peut pas jouer de cartes Outil Pokémon. Retirez toutes les cartes Outil Pokémon aux Pokémon de votre adversaire et défaussez-les.",
				'de-de': "Solange sich Aerodactyl ex im Spiel befindet, kann dein Gegner keine Pokémon-Ausrüstungs-Karten spielen. Entferne alle Pokémon-Ausrüstungs-Karten, die an den gegnerischen Pokémon angelegt sind und lege sie auf seinen Ablagestapel."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
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
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83473,
				cardmarket: 275871
			}
		},
	]
}

export default card
