import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チルタリスex",
		'th-th': "ทิลทาลิสex",
		'ko-kr': "파비코리 ex"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ハミングヒール",
			'th-th': "ฮัมมิงฮีล",
			'ko-kr': "허밍 힐"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 전원의 HP를 각각 「20」회복한다."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			'ja-jp': "ひかりのはどう",
			'th-th': "คลื่นแสง",
			'ko-kr': "빛의파동"
		},

		damage: 140,

		effect: {
			'ja-jp': "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้",
			'ko-kr': "상대의 다음 차례에 이 포켓몬은 상대의 포켓몬이 사용하는 기술의 효과를 받지 않는다."
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741918,
				tcgplayer: 566050,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card