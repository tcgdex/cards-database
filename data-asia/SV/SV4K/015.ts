import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマex",
		'zh-tw': "紅蓮鎧騎ex",
		th: "กุเร็นอาร์มาex",
		ko: "카디나르마 ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "グレンアーマー",
			'zh-tw': "紅蓮盔甲",
			th: "กุเร็นอาร์เมอร์",
			ko: "홍련 아머"
		},

		effect: {
			ja: "このポケモンのHPがまんたんの状態なら、このポケモンが相手のポケモンから受けるワザのダメージは「-80」される。",
			'zh-tw': "若這隻寶可夢的HP是全滿的狀態，則這隻寶可夢受到對手的寶可夢招式的傷害「-80」點。",
			th: "ถ้า HP ของโปเกมอนนี้ยังเต็มอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-80]",
			ko: "이 포켓몬에게 데미지 카운터가 올려져 있지 않은 상태라면 이 포켓몬이 상대의 포켓몬으로부터 받는 기술의 데미지는 「-80」이 된다."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しゃくねつバズーカ",
			'zh-tw': "灼熱火箭炮",
			th: "บาซูการ้อนระอุ",
			ko: "작열바주카"
		},

		damage: "40+",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×40點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ x40",
			ko: "이 포켓몬에게 붙어 있는 (불꽃) 에너지의 개수 × 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card