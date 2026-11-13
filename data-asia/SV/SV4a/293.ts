import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令",
		id: "Bisharp"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		ja: "コマタナ"
	},

	description: {
		ja: "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體， 會一個接一個地遭到吸收。",
		id: "Bisharp membentuk pasukan dan memimpin para Pawniard. Pasukan yang kalah dalam pertarungan perebutan wilayah teritorial akan diserap oleh pasukan pemenang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ダークカッター",
			'zh-tw': "暗黑利刃",
			id: "Kegelapan Pemotong"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			ja: "もろはぎり",
			'zh-tw': "雙刃斬",
			id: "Sabetan Luka Bersama"
		},

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 120,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747647,
				tcgplayer: 567695,
				cardtrader: 270301,
			},
		},
	]
}

export default card