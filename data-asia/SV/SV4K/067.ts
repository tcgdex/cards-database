import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "イワパレス",
		th: "อิวาพาเลซ",
		ko: "암팰리스"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	dexId: [558],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
		th: "เล็บอันหนานั้นเป็นอาวุธที่แข็งแกร่งที่สุด แข็งถึงขนาดทำให้กระดองหุ้มหลังของโดไซดอนเป็นรอยร้าวได้",
		ko: "두꺼운 발톱이 최고의 무기다. 거대코뿌리의 프로텍터조차 금이 갈 정도로 딱딱하다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がちんこ",
			th: "ตั้งใจสู้",
			ko: "진검승부"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "がんぺきバッシュ",
			th: "ผาสูงตีถล่ม",
			ko: "암벽배시"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจากโปเกมอนวิวัฒนาการจะถูก [-100]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741204
	}
}

export default card