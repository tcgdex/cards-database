import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d’Alola",
		'es-es': "Meowth de Alola",
		'it-it': "Meowth di Alola",
		'pt-br': "Meowth de Alola",
		'de-de': "Alola-Mauzi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

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
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

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
		'en-us': "This Pokémon was not originally found in Alola. Human actions caused a surge in their numbers, and they went feral. They're prideful and crafty.",
	},

	thirdParty: {
		cardmarket: 295389,
		tcgplayer: 126950
	}
}

export default card
