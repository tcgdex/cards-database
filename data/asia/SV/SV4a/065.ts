import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ストリンダー",
		'zh-tw': "顫弦蠑螈",
		'th-th': "สตรินเดอร์",
		'id-id': "Toxtricity"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [849],
	hp: 140,
	types: ["Lightning"],

	description: {
		'ja-jp': "どんな 相手にも 動じず 気だるげに ケンカを売る スタイルに 憧れる 若者も 多い。",
		'zh-tw': "面對任何對手都能鎮定自若，一臉懶樣地挑釁對手的風格， 受到了不少年輕人的憧憬。",
		'th-th': "มีวัยรุ่นจำนวนมากที่หลงใหลสไตล์การหาเรื่องอีกฝ่ายแบบเนือย ๆ โดยไม่หวั่นแม้ศัตรูจะเป็นแบบใดก็ตามของมัน",
		'id-id': "Banyak anak muda yang mengagumi gaya Toxtricity yang dengan lesunya tidak takut memprovokasi lawan apa pun."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "にらみつける",
			'zh-tw': "瞪眼",
			'th-th': "เหลือบมอง",
			'id-id': "Memelototi"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "ミックスラウド",
			'zh-tw': "混和高聲",
			'th-th': "มิกซ์ลาวด์",
			'id-id': "Mix Loud"
		},

		damage: "50+",

		effect: {
			'ja-jp': "自分のベンチポケモンのタイプの数×30ダメージ追加。",
			'zh-tw': "增加自己的備戰寶可夢的屬性種類的數量×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนประเภทของโปเกมอนบนเบนช์ฝ่ายเรา x30",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap tipe Pokémon Cadangan sendiri."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746447,
				tcgplayer: 567450,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card