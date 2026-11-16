import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Larvitar",
		ja: "ヨーギラス",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	dexId: [246],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	cameoDexIds: [25],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "なかまをさがす",
			},
			effect: {
				ja: "自分の山札から「たねポケモン」または「ベイビィポケモン」を1枚選び出し、ベンチに出す。その後、その山札をよく切る。（自分のベンチに空きがないとき、このワザは失敗する。）",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ふみつけ",
			},
			damage: "20+",
			effect: {
				ja: "コインを1回投げ、「おもて」なら、10ダメージを追加する。",
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],

	retreat: 1,
}

export default card
