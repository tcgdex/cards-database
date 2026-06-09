import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイノーズ",
		'zh-tw': "大朝北鼻",
		th: "ไดโนซ"
	},

	illustrator: "takuyoa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [476],
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "３つの 小さな ユニットを 使い エサを とったり 敵と 戦う。 本体は ほぼ 命令するだけ。",
		'zh-tw': "會驅使３個小組件去獲取食物或與敵人戰鬥。本體基本上只負責下命令。",
		th: "จะใช้ร่างส่วนย่อยทั้ง 3 จับเหยื่อบ้างต่อสู้กับศัตรูบ้าง ส่วนร่างหลักส่วนใหญ่จะออกคำสั่งเพียงอย่างเดียว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "トリプルノーズ",
			'zh-tw': "三重北鼻",
			th: "ทริปเปิลโนซ"
		},

		damage: "40×",

		effect: {
			ja: "コインを3回投げ、オモテの数×40ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×40點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "アイアンバスター",
			'zh-tw': "鐵之光炮",
			th: "ไอออนบัสเตอร์"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724031
	}
}

export default card