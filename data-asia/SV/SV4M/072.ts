import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "シママ",
		th: "ชิมามา",
		ko: "줄뮤마"
	},

	illustrator: "matazo",
	category: "Pokemon",
	dexId: [522],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
		th: "เมื่อปล่อยไฟฟ้าออกมาแผงขนบนหัวจะเปล่งแสง พูดคุยสื่อสารกับพวกพ้องด้วยจำนวนครั้งหรือจังหวะการเปล่งแสงของแผงขนบนหัว",
		ko: "방전하면 갈기가 빛난다. 갈기가 빛나는 횟수나 리듬으로 동료와 대화한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "うしろげり",
			th: "เตะกลับหลัง",
			ko: "뒤로 차기"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト",
			th: "ไวลด์โวลต์",
			ko: "와일드볼트"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741850
	}
}

export default card