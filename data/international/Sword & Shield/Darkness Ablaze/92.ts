import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [338],

	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
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
				'en-us': "Resistance Shade",
				'fr-fr': "Résistance Ombragée",
				'es-es': "Sombra Resistencia",
				'it-it': "Oscura Resistenza",
				'pt-br': "Sombra da Resistência",
				'de-de': "Resistenzschatten"
			},
			effect: {
				'en-us': "If you have Lunatone in play, your opponent's Pokémon in play have no Resistance.",
				'fr-fr': "Si vous avez Séléroc en jeu, les Pokémon en jeu de votre adversaire n'ont pas de Résistance.",
				'es-es': "Si tienes a Lunatone en juego, los Pokémon en juego de tu rival no tienen Resistencia.",
				'it-it': "Se hai Lunatone in gioco, i Pokémon in gioco del tuo avversario non hanno resistenza.",
				'pt-br': "Se você tiver Lunatone em jogo, os Pokémon em jogo do seu oponente não terão Resistência.",
				'de-de': "Wenn du Lunastein im Spiel hast, haben die Pokémon deines Gegners im Spiel keine Resistenz."
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
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
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


	stage: "Basic",

	description: {
		'en-us': "When it rotates itself, it gives off light similar to the sun, thus blinding its foes."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483339,
				tcgplayer: 219484
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483339,
				tcgplayer: 219484
			}
		},
	],
}

export default card
