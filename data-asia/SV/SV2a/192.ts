import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガルーラex",
		'zh-tw': "袋獸ex",
		th: "การูราex",
		id: "Kangaskhan ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "トリプルドロー",
			'zh-tw': "三重抽出",
			th: "ทริปเปิ้ลดรอว์",
			id: "Triple Draw"
		},

		effect: {
			ja: "自分の山札を3枚引く。",
			'zh-tw': "從自己的牌庫抽出3張卡。",
			th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 3 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "マシンガンパンチ",
			'zh-tw': "機關槍拳",
			th: "แมชชีนกันพันช์",
			id: "Machinegun Punch"
		},

		damage: "100×",

		effect: {
			ja: "コインを4回投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×100點傷害。",
			th: "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100",
			id: "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719568
	}
}

export default card