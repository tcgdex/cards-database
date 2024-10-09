import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル",
		'zh-tw': "晶光花",
		th: "คิราฟลอร์"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Kazumasa Yasukuni",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "毒エネルギーが 結晶化した 花びらは テラスタルの 宝石に 似ていると 最近 判明した。",
		'zh-tw': "最近發現牠的毒能量 結晶化後所形成的花瓣 與太晶的寶石類似。",
		th: "เมื่อไม่นานมานี้พบว่ากลีบดอกไม้ที่ตกผลึกจากพลังงานพิษนั้นมีความคล้ายกับอัญมณีเทรัสตัล"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しんけいどく",
			'zh-tw': "神經毒",
			th: "พิษทำลายประสาท"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】與【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ชา]"
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "ベノムショック",
			'zh-tw': "毒液衝擊",
			th: "เวนอมช็อก"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンがどくなら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加100點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card