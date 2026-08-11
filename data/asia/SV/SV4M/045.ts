import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ギルガルドex",
		'zh-tw': "堅盾劍怪ex",
		'th-th': "กิลการ์ดex",
		'ko-kr': "킬가르도 ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "ピアレスエッジ",
			'zh-tw': "絕世刀鋒",
			'th-th': "คมดาบอดุลย์",
			'ko-kr': "피어리스에지"
		},

		damage: "70×",

		effect: {
			'ja-jp': "自分がすでにとったサイドの枚数×70ダメージ。",
			'zh-tw': "造成自己已經獲得的獎賞卡的張數×70點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนการ์ดรางวัลที่ฝ่ายเราหยิบไปแล้ว x70",
			'ko-kr': "자신이 이미 가져온 프라이즈의 장수 × 70데미지를 준다."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'ja-jp': "もろはぎり",
			'zh-tw': "雙刃斬",
			'th-th': "ฟันดาบสองคม",
			'ko-kr': "양날베기"
		},

		damage: 220,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'ko-kr': "이 포켓몬에게도 30데미지를 준다."
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
			type: "holo",
			thirdParty: {
				cardmarket: 741872,
				tcgplayer: 566005,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card