import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "シママ",
		'zh-tw': "斑斑馬",
		th: "ชิมามา"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [522],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。",
		'zh-tw': "放電時鬃毛會發光。利用鬃毛閃爍的次數及節奏與夥伴交談。",
		th: "เมื่อปล่อยไฟฟ้าออกมาแผงขนบนหัวจะเปล่งแสง พูดคุยสื่อสารกับพวกพ้องด้วยจำนวนครั้งหรือจังหวะการเปล่งแสงของแผงขนบนหัว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト",
			'zh-tw': "瘋狂伏特",
			th: "ไวลด์โวลต์"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
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