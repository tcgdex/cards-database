import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "チヲハウハネ",
		'zh-tw': "爬地翅"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [988],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
		'zh-tw': "與古老書籍裡介紹的一種叫做爬地翅的生物有著 相似點的神秘寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふみならす",
			'zh-tw': "踩落"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ねっしょうどとう",
			'zh-tw': "燙傷怒濤"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも90ダメージ。相手のバトルポケモンをやけどにする。",
			'zh-tw': "這隻寶可夢也受到90點傷害。將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card