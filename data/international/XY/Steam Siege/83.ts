import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'de-de': "Shardrago"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Proud Fang",
				'fr-fr': "Croc Orgueilleux",
				'es-es': "Colmillo Imponente",
				'it-it': "Zanne Superbe",
				'pt-br': "Canino Orgulhoso",
				'de-de': "Stolze Fänge"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon BREAK in play, this attack does 60 more damage.",
				'fr-fr': "Si votre adversaire a un Pokémon TURBO en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Pokémon TURBO en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il tuo avversario ha dei Pokémon TURBO in gioco, questo attacco infligge 60 danni in più.",
				'pt-br': "Se seu oponente tiver algum Pokémon TURBO em jogo, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn dein Gegner Pokémon-TURBO im Spiel hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Giga Claw",
				'fr-fr': "Giga Griffe",
				'es-es': "Gigagarra",
				'it-it': "Gigartiglio",
				'pt-br': "Garra Gigantesca",
				'de-de': "Gigaklaue"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Si ambas son cruz, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Se ambas saírem coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It warms its body by absorbing sunlight with its wings. When its body temperature falls, it can no longer move.",
	},

	thirdParty: {
		cardmarket: 291644,
		tcgplayer: 121209
	}
}

export default card
