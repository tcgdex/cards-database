import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボック",
		'zh-tw': "阿柏怪",
		th: "อาร์บ็อก"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	dexId: [24],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。",
		'zh-tw': "腹部的花紋看起來像一張可怕的臉。弱小的敵人只要看到 這個花紋就會被嚇跑。",
		th: "ลวดลายที่ท้องดูเหมือนใบหน้าที่น่ากลัว ศัตรูที่อ่อนแอแค่เห็นลวดลายนั้นก็เผ่นหนีแล้ว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "パニックどく",
			'zh-tw': "恐慌毒",
			th: "พิษตกใจ"
		},

		effect: {
			ja: "相手のバトルポケモンをどくとやけどとこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【灼傷】與【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ไหม้]และ[สับสน]"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙",
			th: "เขี้ยวแห่งความมืด"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card