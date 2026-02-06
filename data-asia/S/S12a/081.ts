import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土狼犬",
		th: "โปชิเอนา",
		ja: "ポチエナ"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。 個性非常執著。",
		th: "ด้วยประสาทรับกลิ่นที่ดีเยี่ยม ไม่ปล่อยให้เหยื่อที่หมายตาไว้รอดไปได้ มีนิสัยชอบเซ้าซี้มาก",
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			th: "แทะ",
			ja: "かじる"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞一下",
			th: "จุ้นจ้านหน่อย",
			ja: "ちょっとつっこむ"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [261],

	thirdParty: {
		cardmarket: 687643
	}
}

export default card