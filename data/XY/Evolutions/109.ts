import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "ナッシー[Exeggutor]",
		fr: "ナッシー[Noadkoko]",
	},
	illustrator: "Dr.Ooyama",
	rarity: "Rare",
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
			},
			effect: {
				en: "コインを1回投げオモテなら、10ダメージを追加。\nFlip a coin. If heads, this attack does 10 more damage.",
				fr: "コインを1回投げオモテなら、10ダメージを追加。\nLancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
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
