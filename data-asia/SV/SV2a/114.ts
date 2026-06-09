import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モンジャラ",
		'zh-tw': "蔓藤怪",
		th: "มอนจารา",
		id: "Tangela"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的 真面目至今仍是個謎。",
		th: "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้",
		id: "Hingga saat ini, wujud asli Tangela di balik jalar yang terus tumbuh tanpa batas walau dicabut ini masih belum terungkap."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まきつきさほう",
			'zh-tw': "緊束作法",
			th: "วิธีการพันเลื้อย",
			id: "Etiket Membelit"
		},

		damage: "10+",

		effect: {
			ja: "この番、手札から「エリカの招待」を出して使っていたなら、60ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了「莉佳的招待」，則增加60點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ด [คำเชิญของเอริกะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			id: "Jika pada giliran ini, Undangan Erika telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719567
	}
}

export default card