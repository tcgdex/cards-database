import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーンex",
		'zh-tw': "骨紋巨聲鱷ex",
		th: "ลาวด์โบนex",
		id: "Skeledirge ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [911],
	hp: 340,
	types: ["Fire"],

	evolveFrom: {
		ja: "アチゲータ"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "かつりょくのうた",
			'zh-tw': "活力之歌",
			th: "บทเพลงเปี่ยมพลัง",
			id: "Lagu Vitalitas"
		},

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		},

		damage: 50,
		cost: ["Fire"]
	}, {
		name: {
			ja: "バーニングボイス",
			'zh-tw': "燃燒之聲",
			th: "เบิร์นนิงวอยซ์",
			id: "Burning Voice"
		},

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "270-",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746234,
				tcgplayer: 567391,
				cardtrader: 269612,
			},
		},
	]
}

export default card