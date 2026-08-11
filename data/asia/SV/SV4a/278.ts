import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コノヨザル",
		'zh-tw': "棄世猴",
		'id-id': "Annihilape"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	dexId: [979],
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。",
		'zh-tw': "會將隱藏在心中的憤怒之力注入拳頭發動攻擊，其威力 會深入骨髓，將對手打個粉碎。",
		'id-id': "Annihilape mengerahkan kekuatan amarah yang tersembunyi di dalam hati ke tinjunya, lalu memukulkannya hingga tulang lawannya menjadi hancur berkeping-keping dari dalam."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ふんどのこぶし",
			'zh-tw': "憤怒之拳",
			'id-id': "Tinju Amarah"
		},

		damage: "70×",

		effect: {
			'ja-jp': "相手がすでにとったサイドの枚数×70ダメージ。",
			'zh-tw': "造成對手已經獲得的獎賞卡的張數×70點傷害。",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar Kartu Point yang telah diambil lawan."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "ダイナマイトパンチ",
			'zh-tw': "炸藥拳",
			'id-id': "Pukulan Dinamit"
		},

		damage: 170,

		effect: {
			'ja-jp': "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747632,
				tcgplayer: 567679,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card