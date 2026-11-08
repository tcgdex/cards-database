import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リーフィアex",
		'id-id': "Leafeon ex",
		'zh-tw': "葉伊布ex",
		'zh-cn': "葉伊布ex"
	},

	illustrator: "Jiro Sasumo",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "あおばのあらし",
			'id-id': "Badai Daun Segar",
			'zh-tw': "綠葉風暴",
			'zh-cn': "綠葉風暴"
		},

		damage: "60×",

		effect: {
			'ja-jp': "相手のポケモン全員についているエネルギーの数×60ダメージ。",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Energi yang dikenakan pada semua Pokémon lawan.",
			'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×60點傷害。",
			'zh-cn': "造成對手的所有寶可夢身上附加的能量的數量×60點傷害。"
		}
	}, {
		cost: ["Grass", "Fire", "Water"],

		name: {
			'ja-jp': "モスアゲート",
			'id-id': "Moss Agate",
			'zh-tw': "苔紋瑪瑙",
			'zh-cn': "苔紋瑪瑙"
		},

		damage: 230,

		effect: {
			'ja-jp': "自分のベンチポケモン全員のHPを、それぞれ「100」回復する。",
			'id-id': "Pulihkan HP semua Pokémon Cadangan sendiri masing-masing sejumlah 100.",
			'zh-tw': "將自己的所有備戰寶可夢各恢復「100」HP。",
			'zh-cn': "將自己的所有備戰寶可夢各恢復「100」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803313,
				tcgplayer: 602664,
			},
		},
	],

	retreat: 2,
	regulationMark: "H"
}

export default card