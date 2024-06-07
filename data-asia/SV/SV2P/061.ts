import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤルキモノ",
		'zh-tw': "過動猿",
		th: "ยารุคิโมโนะ",
		id: "Vigoroth"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [288],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体を 動かしていないと ストレスが 溜まりすぎて 具合が 悪くなってしまうのだ。",
		'zh-tw': "如果不活動身體，就會累積過多的壓力， 使身體狀況變糟。",
		th: "ถ้าไม่ได้ขยับร่างกายความเครียดจะสะสมมากเกินไปจนรู้สึกไม่สบาย",
		id: "Jika Vigoroth tidak menggerakkan tubuhnya, Pokémon ini mengalami stres berlebihan dan kondisi tubuhnya memburuk."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決",
			th: "ตั้งใจสู้",
			id: "Menentang"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "するどいツメ",
			'zh-tw': "銳利之爪",
			th: "กรงเล็บคม",
			id: "Cakar Tajam"
		},

		damage: "60+",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card