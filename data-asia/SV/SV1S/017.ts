import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ハギギシリ",
		'zh-tw': "磨牙彩皮魚",
		th: "ฮากิกิชิริ",
		id: "Bruxish"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [779],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "強く 歯ぎしり することで 脳を 刺激。 生みだした サイコパワーを 頭の 突起から 撃ち出す。",
		'zh-tw': "會用力磨牙刺激大腦，然後從頭部的突起物發射 藉其產生的精神力量。",
		th: "ขบฟันอย่างแรงเพื่อกระตุ้นสมอง โจมตีโดยยิงพลังจิตที่สร้างขึ้นออกจากติ่งบนหัว",
		id: "Bruxish merangsang otaknya dengan menggeretakkan giginya secara kuat. Pokémon ini menembakkan kekuatan psikokinesis yang diciptakan melalui tonjolan di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ビビッドチャージ",
			'zh-tw': "多彩充能",
			th: "เติมสีฉูดฉาด",
			id: "Vivid Charge"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺",
			th: "สแปลช",
			id: "Splash"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card