import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 70,

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
				'en-us': "Sneaky Smash",
				'fr-fr': "Fracas Sournois",
				'es-es': "Golpe Furtivo",
				'it-it': "Colpo Furtivo",
				'pt-br': "Esmagada Sorrateira",
				'de-de': "Hinterhältiger Schlag"
			},
			effect: {
				'en-us': "You can use this attack only if you go second, and only on your first turn. Discard an Energy from 1 of your opponent’s Pokémon.",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie de l’un des Pokémon de votre adversaire.",
				'es-es': "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Descarta 1 Energía de 1 de los Pokémon de tu rival.",
				'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Scarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Descarte 1 Energia de 1 dos Pokémon do seu oponente.",
				'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Lege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'es-es': "Emboscada",
				'it-it': "Imboscata",
				'pt-br': "Emboscada",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
		cardmarket: 316001,
		tcgplayer: 157690
	}
}

export default card
