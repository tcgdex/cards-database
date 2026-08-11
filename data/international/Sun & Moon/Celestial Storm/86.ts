import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
				'es-es': "Golpes Furia",
				'it-it': "Sfuriate",
				'pt-br': "Golpes de Fúria",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Beat Up",
				'fr-fr': "Baston",
				'es-es': "Paliza",
				'it-it': "Picchiaduro",
				'pt-br': "Espancar",
				'de-de': "Prügler"
			},
			effect: {
				'en-us': "Flip a coin for each Pokémon you have in play. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda por cada Pokémon que tengas en juego. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni Pokémon che hai in gioco. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda para cada Pokémon que você tem em jogo. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 1 Münze für jedes Pokémon, das du im Spiel hast. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses its claws to poke holes in eggs so it can slurp out the insides. Breeders consider it a scourge and will drive it away or eradicate it.",
	},

	thirdParty: {
		cardmarket: 361330,
		tcgplayer: 170908
	}
}

export default card
