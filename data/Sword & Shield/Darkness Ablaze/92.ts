import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resistance Shade",
				fr: "Résistance Ombragée",
				es: "Sombra Resistencia",
				it: "Oscura Resistenza",
				pt: "Sombra da Resistência",
				de: "Resistenzschatten"
			},
			effect: {
				en: "If you have Lunatone in play, your opponent's Pokémon in play have no Resistance.",
				fr: "Si vous avez Séléroc en jeu, les Pokémon en jeu de votre adversaire n'ont pas de Résistance.",
				es: "Si tienes a Lunatone en juego, los Pokémon en juego de tu rival no tienen Resistencia.",
				it: "Se hai Lunatone in gioco, i Pokémon in gioco del tuo avversario non hanno resistenza.",
				pt: "Se você tiver Lunatone em jogo, os Pokémon em jogo do seu oponente não terão Resistência.",
				de: "Wenn du Lunastein im Spiel hast, haben die Pokémon deines Gegners im Spiel keine Resistenz."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When it rotates itself, it gives off light similar to the sun, thus blinding its foes."
	}
}

export default card
