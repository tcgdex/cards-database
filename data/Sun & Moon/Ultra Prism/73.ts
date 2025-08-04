import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
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
				en: "Sneaky Smash",
				fr: "Fracas Sournois",
				es: "Golpe Furtivo",
				it: "Colpo Furtivo",
				pt: "Esmagada Sorrateira",
				de: "Hinterhältiger Schlag"
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Discard an Energy from 1 of your opponent’s Pokémon.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie de l’un des Pokémon de votre adversaire.",
				es: "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Descarta 1 Energía de 1 de los Pokémon de tu rival.",
				it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Scarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Descarte 1 Energia de 1 dos Pokémon do seu oponente.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Lege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				es: "Emboscada",
				it: "Imboscata",
				pt: "Emboscada",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 316001,
		tcgplayer: 157690
	}
}

export default card
