import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "アラブルタケ",
		'zh-tw': "猛惡菇",
		th: "เห็ดคลุ้มคลั่ง"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "danciao",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。",
		'zh-tw': "某本書裡記載的一種 叫做猛惡菇的生物， 有可能就是這隻寶可夢。",
		th: "มีความเป็นไปได้ว่าโปเกมอนตัวนี้คือสิ่งมีชีวิตที่เรียกว่าเห็ดคลุ้มคลั่งซึ่งถูกระบุไว้ในหนังสือเล่มหนึ่ง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくをとばす",
			'zh-tw': "噴毒",
			th: "พ่นพิษ"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "まくしなぐる",
			'zh-tw': "爆毆",
			th: "ต่อยรัว ๆ"
		},

		damage: "50+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×50ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×50點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card