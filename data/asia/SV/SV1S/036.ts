import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒラヒナ",
		'zh-tw': "飄飄雛",
		'th-th': "ฮิราฮินะ",
		'id-id': "Flittle"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 40,
	types: ["Psychic"],

	description: {
		'ja-jp': "お腹の ヒラヒラから 放射する サイコパワーで わずか １センチだけ つま先が 地面から 浮いている。",
		'zh-tw': "從肚子的褶邊放射出的精神力量，能夠讓牠浮在腳尖和地面 距離僅有區區１公分的空中。",
		'th-th': "พลังจิตที่ปลดปล่อยออกมาจากส่วนที่พลิ้วไหวบริเวณท้องจะทำให้นิ้วเท้าลอยจากพื้นเพียง 1 เซนติเมตร",
		'id-id': "Dengan kekuatan psikokinesis yang dipancarkan dari embel-embel di perutnya, ujung kaki Flittle melayang di udara hanya setinggi 1 cm."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "チョロダッシュ",
			'zh-tw': "小衝刺",
			'th-th': "แดชไปทั่ว",
			'id-id': "Lari Kecil Kencang"
		},

		damage: 10,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693002,
				tcgplayer: 567153,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card