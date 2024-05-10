import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イワーク",
		'zh-tw': "大岩蛇",
		th: "อิวาร์ค"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。",
		th: "บิดร่างกายที่ใหญ่และแข็งแรงให้โค้งงอเป็นเกลียวขุดเจาะพื้นดินลงไปอย่างรวดเร็วด้วยความเร็ว 80 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かたいずつき",
			'zh-tw': "堅硬頭錘",
			th: "พุ่งชนด้วยหัวแข็ง"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			th: "แลนด์ครัช"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card