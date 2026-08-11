import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドゴーム",
		'zh-tw': "吼爆彈",
		'th-th': "โดกอม",
		'ko-kr': "노공룡"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [294],
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "大声は 聴覚だけでなく 空気の 圧力となり 敵を 吹きとばし ダメージを 与える。",
		'zh-tw': "巨大的叫聲不只會傷害聽覺，還會壓縮空氣造成衝擊波 將對手震飛造成傷害。",
		'th-th': "เสียงร้องดังลั่นนั้นไม่ใช่แค่เสียงดังอย่างเดียว แต่ยังกลายเป็นแรงดันอากาศที่สามารถพัดคู่ต่อสู้ให้ปลิวและสร้างความเสียหายได้",
		'ko-kr': "큰 목소리는 청각뿐만 아니라 공기의 압력마저 변화시켜 상대를 날려버리고 데미지를 준다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "のしかかり",
			'zh-tw': "泰山壓頂",
			'th-th': "ทิ้งตัวทับ",
			'ko-kr': "누르기"
		},

		damage: 10,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "メガインパクト",
			'zh-tw': "超級衝擊",
			'th-th': "เมก้าอิมแพกต์",
			'ko-kr': "메가임팩트"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741440,
				tcgplayer: 565811,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card