import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジヘッド",
		'zh-tw': "雙首暴龍",
		'th-th': "จิเฮด",
		'id-id': "Zweilous"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "頭どうしの 仲は 悪い。 ２つの 頭を 可愛がらないと 嫉妬で 大喧嘩を 始める。",
		'zh-tw': "２顆頭的感情很差。如果兩邊疼愛的程度不同， 就會因爭風吃醋而開始大吵。",
		'th-th': "สองหัวไม่ค่อยถูกกัน ถ้าไม่เอ็นดูทั้ง 2 หัวจะอิจฉากันเองแล้วทะเลาะกันใหญ่โต",
		'id-id': "Hubungan 2 kepala Zweilous tidak akur. Mereka akan bertengkar hebat jika tidak diperhatikan secara adil."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ともだちをさがす",
			'zh-tw': "尋找朋友",
			'th-th': "หาพรรคพวก",
			'id-id': "Mencari Teman"
		},

		effect: {
			'ja-jp': "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'th-th': "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			'th-th': "กระโดดโหม่ง",
			'id-id': "Sundulan Meloncat"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701112,
				tcgplayer: 568181,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card