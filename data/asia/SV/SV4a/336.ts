import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "プクリンex",
		'zh-tw': "胖可丁ex",
		'id-id': "Wigglytuff ex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ふくらむボディ",
			'zh-tw': "膨脹之軀",
			'id-id': "Tubuh Menggelembung"
		},

		effect: {
			'ja-jp': "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「＋100」される。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。",
			'id-id': "Jika Pokémon ini mengenakan Energi Spesial, HP maksimal Pokémon ini bertambah sejumlah 100."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "フレンドタックル",
			'zh-tw': "朋友衝撞",
			'id-id': "Friend Tackle"
		},

		damage: "90+",

		effect: {
			'ja-jp': "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。",
			'id-id': "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 90."
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
				cardmarket: 747690,
				tcgplayer: 567736,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card