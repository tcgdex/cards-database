import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キラーメ",
		'zh-tw': "晶光芽",
		'th-th': "คิราเมะ"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "洞窟の 壁から 栄養分を 吸収。 毒の 結晶で できた 花びらを 身にまとう。",
		'zh-tw': "會從洞窟的壁上吸取養分。包覆在身上的花瓣是用毒的結晶做成的。",
		'th-th': "ดูดซับสารอาหารจากผนังถ้ำ ร่างกายห่อหุ้มด้วยกลีบดอกไม้ที่เป็นผลึกพิษ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "てっぺき",
			'zh-tw': "鐵壁",
			'th-th': "กำแพงเหล็ก"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้"
		}
	}, {
		cost: ["Fighting"],

		name: {
			'ja-jp': "ぶらさがる",
			'zh-tw': "垂吊",
			'th-th': "ห้อยโตงเตง"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724012,
				tcgplayer: 567017,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card