import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				es: "Canon",
				it: "Coro",
				pt: "Circular",
				de: "Kanon"
			},
			effect: {
				en: "This attack does 50 damage for each of your Pokémon in play that has the Round attack.",
				fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon en jeu ayant l’attaque Chant Canon.",
				es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
				it: "Questo attacco infligge 50 danni per ogni tuo Pokémon in gioco che ha l’attacco Coro.",
				pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Circular.",
				de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 50 Schadenspunkte zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				es: "Vozarrón",
				it: "Granvoce",
				pt: "Hipervoz",
				de: "Schallwelle"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Its roar in battle shakes the ground like a tremor—or like an earthquake has struck."
	}
}

export default card
