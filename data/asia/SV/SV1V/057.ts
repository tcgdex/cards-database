import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フォレトス",
		'zh-tw': "佛烈托斯",
		'th-th': "ฟอเรทอส",
		'id-id': "Forretress"
	},

	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [205],
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "鋼鉄のように 硬い 殻で 全身を 覆っている。 中の 正体は 不明。",
		'zh-tw': "全身覆蓋著有如鋼鐵般堅硬的殼。 殼裡的真面目至今不明。",
		'th-th': "เปลือกที่แข็งราวเหล็กปกคลุมรอบตัว ตัวตนภายใต้เปลือกเป็นอย่างไรไม่มีใครรู้",
		'id-id': "Forretress menyelimuti dirinya dengan cangkang yang keras seperti baja. Wujud asli di dalamnya tidak diketahui."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "れんぞくスピン",
			'zh-tw': "連續旋轉",
			'th-th': "หมุนต่อเนื่อง",
			'id-id': "Putaran Beruntun"
		},

		damage: "50×",

		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数×50ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×50點傷害。",
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x50",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 50 untuk tiap lemparan dengan hasil sisi depan."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'ja-jp': "シェルローリング",
			'zh-tw': "硬殼回轉",
			'th-th': "เชลล์โรลลิง",
			'id-id': "Shell Rolling"
		},

		damage: 90,

		effect: {
			'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 50."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693132,
				tcgplayer: 568283,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card