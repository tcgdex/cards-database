import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "レドームシ",
		'zh-tw': "天罩蟲",
		th: "เรโดมุชิ"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [825],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		'zh-tw': "正在殼裡成長著。用精神力量掌握外界的狀況，做好進化的準備。",
		th: "กำลังเติบโตอยู่ในกระดอง รับรู้สภาพการณ์ภายนอกด้วยพลังจิต กำลังเตรียมตัวเพื่อวิวัฒนาการ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まもる",
			'zh-tw': "守住",
			th: "ป้องกันตัว"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘",
			th: "โขกหัวพลังจิต"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card