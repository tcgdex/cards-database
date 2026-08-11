import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キリキザン",
		'zh-tw': "劈斬司令",
		'th-th': "คิริคิซัน",
		'id-id': "Bisharp"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體， 會一個接一個地遭到吸收。",
		'th-th': "เป็นผู้นำและรวมฝูงโคมาทานา ฝูงที่พ่ายแพ้ในการต่อสู้แย่งชิงอาณาเขตจะถูกกลืนรวมกับฝ่ายชนะ",
		'id-id': "Bisharp membentuk pasukan dan memimpin para Pawniard. Pasukan yang kalah dalam pertarungan perebutan wilayah akan diserap oleh pasukan pemenang."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ダークカッター",
			'zh-tw': "暗黑利刃",
			'th-th': "ดาร์กคัตเตอร์",
			'id-id': "Kegelapan Pemotong"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "もろはぎり",
			'zh-tw': "雙刃斬",
			'th-th': "ฟันดาบสองคม",
			'id-id': "Sabetan Luka Bersama"
		},

		damage: 120,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693024,
				tcgplayer: 567174,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card