import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イワパレス",
		'zh-tw': "岩殿居蟹",
		'th-th': "อิวาพาเลซ",
		'ko-kr': "암팰리스"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [558],
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
		'zh-tw': "厚實的鉗子是牠最大的武器。硬度高到甚至能讓 超甲狂犀的護具裂開。",
		'th-th': "เล็บอันหนานั้นเป็นอาวุธที่แข็งแกร่งที่สุด แข็งถึงขนาดทำให้กระดองหุ้มหลังของโดไซดอนเป็นรอยร้าวได้",
		'ko-kr': "두꺼운 발톱이 최고의 무기다. 거대코뿌리의 프로텍터조차 금이 갈 정도로 딱딱하다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "がちんこ",
			'zh-tw': "正面對決",
			'th-th': "ตั้งใจสู้",
			'ko-kr': "진검승부"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "がんぺきバッシュ",
			'zh-tw': "峭壁猛擊",
			'th-th': "ผาสูงตีถล่ม",
			'ko-kr': "암벽배시"
		},

		damage: 100,

		effect: {
			'ja-jp': "次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到進化寶可夢招式的傷害「-100」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจากโปเกมอนวิวัฒนาการจะถูก [-100]"
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
				cardmarket: 741204,
				tcgplayer: 565760,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card