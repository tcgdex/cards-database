import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Destructive Roar",
				fr: "Hurlement destructeur",
				de: "Zerstörendes Brüllen"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire.",
				de: "Wirf eine Münze. Lege bei 'Kopf' 1 Energiekarte, die an 1 Pokémon deines Gegners angelegt ist, auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Attaque caudale",
				de: "Schweifschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigacrush",
				fr: "Gigacrash",
				de: "Gigamalmer"
			},
			effect: {
				en: "Each player discards the top 3 cards from his or her deck.",
				fr: "Chaque joueur se défausse des 3 premières cartes du dessus de son deck.",
				de: "Jeder Spieler legt die 3 obersten Karten seines Decks auf seinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275071,
		tcgplayer: 90114
	}
}

export default card
