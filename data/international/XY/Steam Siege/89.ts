import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Raid",
				'fr-fr': "Razzia Obscure",
				'es-es': "Raid Oscuro",
				'it-it': "Raid Oscuro",
				'pt-br': "Reide",
				'de-de': "Überfall"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Meowth during this turn, this attack does 30 more damage.",
				'fr-fr': "Si ce Pokémon a évolué de Miaouss pendant ce tour, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha evolucionado de Meowth durante este turno, este ataque hace 30 puntos de daño más.",
				'it-it': "Se questo Pokémon si è evoluto da Meowth durante questo turno, questo attacco infligge 30 danni in più.",
				'pt-br': "Se este Pokémon evoluiu de Meowth durante esta vez de jogar, este ataque causará 30 de danos adicionais.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Mauzi entwickelt hat, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
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
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	retreat: 1,

	description: {
		'en-us': "Its lithe muscles allow it to walk without making a sound. It attacks in an instant.",
	},

	thirdParty: {
		cardmarket: 291649,
		tcgplayer: 121215
	}
}

export default card
