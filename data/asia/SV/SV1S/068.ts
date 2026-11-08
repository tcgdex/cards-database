import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パフュートンex",
		'zh-tw': "飄香豚ex",
		'th-th': "เพอร์ฟูตงex",
		'id-id': "Oinkologne ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きょうらんのかおり",
			'zh-tw': "狂亂香氣",
			'th-th': "กลิ่นหอมชวนคลั่ง",
			'id-id': "Aroma Kekalutan"
		},

		damage: "10+",

		effect: {
			'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x30",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Pokémon Cadangan lawan."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ヘビースタンプ",
			'zh-tw': "重磅踩踏",
			'th-th': "เฮฟวีสแตมป์",
			'id-id': "Heavy Stomp"
		},

		damage: 210,

		effect: {
			'ja-jp': "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693035,
				tcgplayer: 567185,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card