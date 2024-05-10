import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドガース",
		'zh-tw': "瓦斯彈",
		th: "โดกาซ",
		id: "Koffing"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "毒ガスで パンパンの 体。 生ゴミの 腐った においを 求め ゴミ捨て場に やってくる。",
		'zh-tw': "身體裡充滿了毒氣。會為了尋求廚餘垃圾的 腐敗氣味而來到垃圾場。",
		th: "ร่างอัดแน่นไปด้วยแก๊สพิษ มาที่ทิ้งขยะเพราะต้องการกลิ่นเหม็นเน่าของขยะสด",
		id: "Tubuh Koffing padat oleh gas beracun. Dia mendatangi tempat pembuangan sampah untuk mencari bau busuk sampah basah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "あやしいガス",
			'zh-tw': "奇異瓦斯",
			th: "ก๊าซประหลาด",
			id: "Gas Membingungkan"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card