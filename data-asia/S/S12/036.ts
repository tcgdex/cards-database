import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "未知圖騰VSTAR",
		th: "อันโนนVSTAR",
		ja: "アンノーンVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "三重力量",
			th: "ไตรพลัง",
			ja: "トライパワー"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×70點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			ja: "コインを3回投げ、オモテの数×70ダメージ。"
		},

		damage: "70×",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星密碼",
			th: "[พลังVSTAR] สตาร์ไซเฟอร์",
			ja: "スターサイファー"
		},

		effect: {
			'zh-tw': "這隻寶可夢離場前，擁有「對手的所有場上寶可夢的弱點全部改爲【超】屬性。」效果的特性。[弱點以「×2」計算傷害。][對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "จนกว่าจะออกจากกระดาน โปเกมอนนี้จะมีความสามารถที่มีเอฟเฟกต์ว่า [จุดอ่อนของโปเกมอนบนกระดานฝ่ายตรงข้ามทุกตัว จะเป็นประเภท[พลังจิต]ทั้งหมด] [จุดอ่อน คำนวณแดเมจ x2] {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			ja: "このポケモンは、場をはなれるまで「相手の場のポケモン全員の弱点は、すべてタイプになる。」という効果の特性を持つ。［弱点は「×2」で計算する。］［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card