import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュペッタex",
		'zh-tw': "詛咒娃娃ex",
		th: "จุปเป็ตตะex",
		id: "Banette ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "とこやみ",
			'zh-tw': "無盡黑暗",
			th: "มืดมิดนิรันดร",
			id: "Kegelapan Abadi"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			'zh-tw': "在下個對手的回合，對手無法從手牌使出物品卡。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือออกมาใช้ได้",
			id: "Pada giliran lawan berikutnya, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ポルターガイスト",
			'zh-tw': "靈騷",
			th: "โพลเตอร์ไกสท์",
			id: "Poltergeist"
		},

		damage: "60×",

		effect: {
			ja: "相手の手札を見て、その中にあるトレーナーズの枚数×60ダメージ。",
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×60點傷害。",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม แดเมจจะเท่ากับจำนวนการ์ดเทรนเนอร์ที่อยู่ในนั้น x60",
			id: "Lihat Kartu Pegangan lawan, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembar Trainer yang ada di antaranya."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693116
	}
}

export default card