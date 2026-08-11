import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キリキザン",
		'zh-tw': "劈斬司令",
		'id-id': "Bisharp"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體， 會一個接一個地遭到吸收。",
		'id-id': "Bisharp membentuk pasukan dan memimpin para Pawniard. Pasukan yang kalah dalam pertarungan perebutan wilayah teritorial akan diserap oleh pasukan pemenang."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ダークカッター",
			'zh-tw': "暗黑利刃",
			'id-id': "Kegelapan Pemotong"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "もろはぎり",
			'zh-tw': "雙刃斬",
			'id-id': "Sabetan Luka Bersama"
		},

		damage: 120,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747647,
				tcgplayer: 567695,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card