import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アマージョex",
		'zh-tw': "甜冷美后ex",
		'th-th': "อมาโจex",
		'ko-kr': "달코퀸 ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "アイシクルソール",
			'zh-tw': "冰柱之踢",
			'th-th': "ฝ่าเท้าแท่งน้ำแข็ง",
			'ko-kr': "테라스탈"
		},

		effect: {
			'ja-jp': "相手のポケモン1匹に、そのポケモンの残りHPが「30」になるように、ダメカンをのせる。",
			'zh-tw': "在對手的1隻寶可夢身上放置傷害指示物直到那隻寶可夢的剩餘HP變為「30」為止。",
			'th-th': "วางตัวนับแดเมจ บนโปเกมอนฝ่ายตรงข้าม 1 ตัว ให้ HP ของโปเกมอนนั้นเหลือเท่ากับ [30]",
			'ko-kr': "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "トロピカルキック",
			'zh-tw': "熱帶踢",
			'th-th': "ทรอปิคัลคิก",
			'ko-kr': "아이시클솔"
		},

		damage: 180,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP，特殊狀態也全部恢復。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30] รักษาสภาวะผิดปกติทั้งหมดด้วย",
			'ko-kr': "상대의 포켓몬 1마리에게 그 포켓몬의 남은 HP가 「30」이 되도록 데미지 카운터를 올린다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741321,
				tcgplayer: 565775,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card