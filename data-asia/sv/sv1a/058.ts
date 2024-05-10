import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジヘッド",
		'zh-tw': "雙首暴龍",
		th: "จิเฮด",
		id: "Zweilous"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "頭どうしの 仲は 悪い。 ２つの 頭を 可愛がらないと 嫉妬で 大喧嘩を 始める。",
		'zh-tw': "２顆頭的感情很差。如果兩邊疼愛的程度不同， 就會因爭風吃醋而開始大吵。",
		th: "สองหัวไม่ค่อยถูกกัน ถ้าไม่เอ็นดูทั้ง 2 หัวจะอิจฉากันเองแล้วทะเลาะกันใหญ่โต",
		id: "Hubungan 2 kepala Zweilous tidak akur. Mereka akan bertengkar hebat jika tidak diperhatikan secara adil."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ともだちをさがす",
			'zh-tw': "尋找朋友",
			th: "หาพรรคพวก",
			id: "Mencari Teman"
		},

		effect: {
			ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			th: "กระโดดโหม่ง",
			id: "Sundulan Meloncat"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card