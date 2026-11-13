import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリンex",
		'zh-tw': "胖可丁ex",
		id: "Wigglytuff ex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	dexId: [40],
	hp: 250,
	types: ["Colorless"],

	evolveFrom: {
		ja: "プリン"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふくらむボディ",
			'zh-tw': "膨脹之軀",
			id: "Tubuh Menggelembung"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「＋100」される。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。",
			id: "Jika Pokémon ini mengenakan Energi Spesial, HP maksimal Pokémon ini bertambah sejumlah 100."
		}
	}],

	attacks: [{
		name: {
			ja: "フレンドタックル",
			'zh-tw': "朋友衝撞",
			id: "Friend Tackle"
		},

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。",
			id: "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747690,
				tcgplayer: 567736,
				cardtrader: 270343,
			},
		},
	]
}

export default card