import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤルキモノ",
		'zh-tw': "過動猿",
		'th-th': "ยารุคิโมโนะ",
		'id-id': "Vigoroth"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [288],
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "体を 動かしていないと ストレスが 溜まりすぎて 具合が 悪くなってしまうのだ。",
		'zh-tw': "如果不活動身體，就會累積過多的壓力， 使身體狀況變糟。",
		'th-th': "ถ้าไม่ได้ขยับร่างกายความเครียดจะสะสมมากเกินไปจนรู้สึกไม่สบาย",
		'id-id': "Jika Vigoroth tidak menggerakkan tubuhnya, Pokémon ini mengalami stres berlebihan dan kondisi tubuhnya memburuk."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "がちんこ",
			'zh-tw': "正面對決",
			'th-th': "ตั้งใจสู้",
			'id-id': "Menentang"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "するどいツメ",
			'zh-tw': "銳利之爪",
			'th-th': "กรงเล็บคม",
			'id-id': "Cakar Tajam"
		},

		damage: "60+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 60."
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
				cardmarket: 705294,
				tcgplayer: 567818,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card