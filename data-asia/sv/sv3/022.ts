import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "サメハダー",
		'zh-tw': "巨牙鯊",
		th: "ซาเมฮาเดอร์"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [319],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "海のギャングと 呼ばれ 生息 海域に 入りこんでしまった 船は もれなく 襲われてしまう。",
		'zh-tw': "被稱為大海惡霸。船隻要是誤闖了牠的棲息海域，無一倖免地都會被襲擊。",
		th: "เรียกกันว่านักเลงแห่งทะเล เรือลำใดที่เข้าไปในอาณาเขตทะเลของมันจะถูกโจมตีโดยไม่มีการละเว้น"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアインパクト",
			'zh-tw': "水流衝擊",
			th: "อควาอิมแพ็ค"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊",
			th: "เจ็ตเฮด"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card