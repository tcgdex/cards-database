import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		de: "Shardrago"
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
				en: "Proud Fang",
				fr: "Croc Orgueilleux",
				es: "Colmillo Imponente",
				it: "Zanne Superbe",
				pt: "Canino Orgulhoso",
				de: "Stolze Fänge"
			},
			effect: {
				en: "If your opponent has any Pokémon BREAK in play, this attack does 60 more damage.",
				fr: "Si votre adversaire a un Pokémon TURBO en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Pokémon TURBO en juego, este ataque hace 60 puntos de daño más.",
				it: "Se il tuo avversario ha dei Pokémon TURBO in gioco, questo attacco infligge 60 danni in più.",
				pt: "Se seu oponente tiver algum Pokémon TURBO em jogo, este ataque causará 60 de danos adicionais.",
				de: "Wenn dein Gegner Pokémon-TURBO im Spiel hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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
				en: "Giga Claw",
				fr: "Giga Griffe",
				es: "Gigagarra",
				it: "Gigartiglio",
				pt: "Garra Gigantesca",
				de: "Gigaklaue"
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Si ambas son cruz, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Se ambas saírem coroa, este ataque não fará nada.",
				de: "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 291644,
		tcgplayer: 121209
	}
}

export default card
