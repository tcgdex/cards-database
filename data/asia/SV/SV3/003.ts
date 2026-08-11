import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キレイハナ",
		'zh-tw': "美麗花",
		'th-th': "คิเรอิฮานะ"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [182],
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "ときおり キレイハナが 集まって 踊るような しぐさを みせる。 太陽を呼ぶ 儀式と 言われる。",
		'zh-tw': "有時美麗花們會聚在一起，做出像是跳舞的動作。據說這是呼喚太陽的儀式。",
		'th-th': "บางครั้งคิเรอิฮานะจะมารวมตัวกันและแสดงท่าทางเหมือนเต้นรำให้ดู ว่ากันว่าเป็นพิธีกรรมเพื่อเรียกดวงอาทิตย์"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ねむりごな",
			'zh-tw': "催眠粉",
			'th-th': "ผงนิทรา"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}, {
		cost: ["Grass"],

		name: {
			'ja-jp': "パワフルダンス",
			'zh-tw': "強力舞",
			'th-th': "พาวเวอร์ฟูลแดนซ์"
		},

		damage: "90×",

		effect: {
			'ja-jp': "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。",
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×90點傷害。",
			'th-th': "ทอยเหรียญตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723915,
				tcgplayer: 566957,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card