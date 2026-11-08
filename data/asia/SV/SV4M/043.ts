import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒトツキ",
		'zh-tw': "獨劍鞘",
		'th-th': "ฮิโตทซึกิ",
		'ko-kr': "단칼빙"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [679],
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "剣の 鍔の 青い 目玉が ヒトツキの 本体。 古びた 布で 人の 生気を 吸い取る。",
		'zh-tw': "獨劍鞘護手上的藍色眼珠是牠的本體。會用陳舊的布吸取人類的精氣。",
		'th-th': "ตาสีฟ้าบนกระบังดาบคือตัวจริงของฮิโตทซึกิ ดูดเอาพลังชีวิตของคนไปด้วยผ้าเก่า ๆ",
		'ko-kr': "검의 가드 부분에 있는 푸른 눈동자가 단칼빙의 본체다. 낡은 천으로 사람의 생기를 빨아들인다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "とつげき",
			'zh-tw': "突擊",
			'th-th': "ประจัญบาน",
			'ko-kr': "돌격"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'ko-kr': "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741870,
				tcgplayer: 566003,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card