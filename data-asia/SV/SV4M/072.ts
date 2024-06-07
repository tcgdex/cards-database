import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "シママ",
		th: "ชิมามา"
	},

	illustrator: "matazo",
	category: "Pokemon",
	dexId: [522],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
		th: "เมื่อปล่อยไฟฟ้าออกมาแผงขนบนหัวจะเปล่งแสง พูดคุยสื่อสารกับพวกพ้องด้วยจำนวนครั้งหรือจังหวะการเปล่งแสงของแผงขนบนหัว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "うしろげり",
			th: "เตะกลับหลัง"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト",
			th: "ไวลด์โวลต์"
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
	regulationMark: "G"
}

export default card