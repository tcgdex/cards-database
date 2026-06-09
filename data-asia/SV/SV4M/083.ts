import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリスex",
		th: "ทิลทาลิสex",
		ko: "파비코리 ex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハミングヒール",
			th: "ฮัมมิงฮีล",
			ko: "허밍 힐"
		},

		effect: {
			ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 전원의 HP를 각각 「20」회복한다."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			ja: "ひかりのはどう",
			th: "คลื่นแสง",
			ko: "빛의파동"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้",
			ko: "상대의 다음 차례에 이 포켓몬은 상대의 포켓몬이 사용하는 기술의 효과를 받지 않는다."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741873
	}
}

export default card