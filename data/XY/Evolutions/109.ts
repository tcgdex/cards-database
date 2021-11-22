import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "ナッシー[Exeggutor]",
		fr: "ナッシー[Noadkoko]",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},
	illustrator: "Dr.Ooyama",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "ふみつけ[Stomp]",
				fr: "ふみつけ [Écrasement]",
				es: "Pisotón",
				it: "Pestone",
				pt: "Pisotear",
				de: "Stampfer"
			},
			effect: {
				en: "コインを1回投げオモテなら、10ダメージを追加。\nFlip a coin. If heads, this attack does 10 more damage.",
				fr: "コインを1回投げオモテなら、10ダメージを追加。\nLancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
