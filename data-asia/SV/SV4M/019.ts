import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バイバニラ",
		'zh-tw': "雙倍多多冰",
		th: "ไบวานิลลา",
		ko: "배바닐라"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [584],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "体温は マイナス６度 前後。 ２匹の バニリッチが くっつき 生まれたと いわれている。",
		'zh-tw': "體溫在零下６度左右。據說是由２隻多多冰黏在一起而誕生的。",
		th: "อุณหภูมิร่างกายประมาณ -6 องศา ว่ากันว่าเกิดมาจากวานิริช 2 ตัวมาติดกัน",
		ko: "체온은 마이너스 6도 전후이다. 2마리의 바닐리치가 붙어서 태어났다고 한다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ごっかんルーム",
			'zh-tw': "酷寒空間",
			th: "ห้องหนาวสุดขั้ว",
			ko: "극한 룸"
		},

		effect: {
			ja: "このポケモンがいるかぎり、残りHPが「40」以下の相手のポケモンは、ワザが使えない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的剩餘HP為「40」以下的寶可夢，無法使用招式。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายตรงข้ามที่มี HP เหลือน้อยกว่าหรือเท่ากับ [40] จะใช้ท่าต่อสู้ไม่ได้",
			ko: "이 포켓몬이 있는 한, 남은 HP가 「40」이하인 상대의 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "つららミサイル",
			'zh-tw': "冰柱飛彈",
			th: "มิสไซล์แท่งน้ำแข็ง",
			ko: "고드름미사일"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741846
	}
}

export default card