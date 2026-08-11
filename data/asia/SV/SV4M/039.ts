import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イワーク",
		'zh-tw': "大岩蛇",
		'th-th': "อิวาร์ค",
		'ko-kr': "롱스톤"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。",
		'th-th': "บิดร่างกายที่ใหญ่และแข็งแรงให้โค้งงอเป็นเกลียวขุดเจาะพื้นดินลงไปอย่างรวดเร็วด้วยความเร็ว 80 กิโลเมตรต่อชั่วโมง",
		'ko-kr': "크고 튼튼한 몸을 뒤틀고 꼬아서 시속 80km로 힘차게 땅을 파나간다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "かたいずつき",
			'zh-tw': "堅硬頭錘",
			'th-th': "พุ่งชนด้วยหัวแข็ง",
			'ko-kr': "단단한박치기"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			'th-th': "แลนด์ครัช",
			'ko-kr': "랜드크래시"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741866,
				tcgplayer: 565999,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card