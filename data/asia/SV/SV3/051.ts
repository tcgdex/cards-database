import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビークインex",
		'zh-tw': "蜂女王ex",
		'th-th': "บีควินex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "かいふくフェロモン",
			'zh-tw': "回復費洛蒙",
			'th-th': "ฟีโรโมนฟื้นพลัง"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「60」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「60」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [60]"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'ja-jp': "ファントムクイーン",
			'zh-tw': "幻影皇后",
			'th-th': "แฟนธอมควีน"
		},

		damage: 200,

		effect: {
			'ja-jp': "ダメカンがのっている相手のベンチポケモン全員に、それぞれダメカンを3個のせる。",
			'zh-tw': "在對手的身上放置有傷害指示物的所有備戰寶可夢身上，各放置3個傷害指示物。",
			'th-th': "วางตัวนับแดเมจบนโปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัวที่มีตัวนับแดเมจวางอยู่ ตัวละ 3 ตัว"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 723996,
				tcgplayer: 567005,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card