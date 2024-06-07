import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ",
		'zh-tw': "摩托蜥",
		th: "โมโตโทคาเงะ",
		id: "Cyclizar"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [967],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "人を 乗せて 時速１２０キロで 疾走する。 人の 体温で 背中が 温まり 元気になる。",
		'zh-tw': "會以時速１２０公里載著人類飛馳，並藉著人類的 體溫來溫熱背部，恢復活力。",
		th: "ให้คนขี่แล้ววิ่งด้วยความเร็ว 120 กิโลเมตรต่อชั่วโมง อุณหภูมิร่างกายของคนจะทำให้หลังของมันอบอุ่น ช่วยให้มันกระฉับกระเฉงขึ้น",
		id: "Cyclizar berpacu dengan kecepatan 120 km/jam sambil mengangkut manusia. Pokémon ini menjadi semangat karena punggungnya dihangatkan dengan suhu tubuh manusia yang mengendarainya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ツーリング",
			'zh-tw': "機車旅遊",
			th: "ทัวริ่ง",
			id: "Touring"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 2 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードアタック",
			'zh-tw': "高速攻擊",
			th: "สปีดแอทแทก",
			id: "Speed Attack"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card