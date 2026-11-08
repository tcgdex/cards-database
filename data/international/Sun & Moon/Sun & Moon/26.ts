import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Incineroar",
		'fr-fr': "Félinferno",
		'es-es': "Incineroar",
		'it-it': "Incineroar",
		'pt-br': "Incineroar",
		'de-de': "Fuegro"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'es-es': "Colmillo Ígneo",
				'it-it': "Rogodenti",
				'pt-br': "Presas de Fogo",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Darkest Lariat",
				'fr-fr': "Dark Lariat",
				'es-es': "Lariat Oscuro",
				'it-it': "Braccioteso",
				'pt-br': "Lariat Escuro",
				'de-de': "Dark Lariat"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This Pokémon has a violent, selfish disposition. If it's not in the mood to listen, it will ignore its Trainer's orders with complete nonchalance.",
	},

	thirdParty: {
		cardmarket: 295335,
		tcgplayer: 126897
	}
}

export default card
