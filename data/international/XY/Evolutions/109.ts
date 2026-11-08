import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "ナッシー[Exeggutor]",
		'fr-fr': "ナッシー[Noadkoko]",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
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
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "ふみつけ[Stomp]",
				'fr-fr': "ふみつけ [Écrasement]",
				'es-es': "Pisotón",
				'it-it': "Pestone",
				'pt-br': "Pisotear",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "コインを1回投げオモテなら、10ダメージを追加。\nFlip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "コインを1回投げオモテなら、10ダメージを追加。\nLancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
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




	description: {
		'en-us': "Dr.オーヤマ考案「日米交流カード」パーティ気分で和洋せっちゅう。",
	},
}

export default card
