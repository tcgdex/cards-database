import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體， 會一個接一個地遭到吸收。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ダークカッター",
			'zh-tw': "暗黑利刃"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "もろはぎり",
			'zh-tw': "雙刃斬"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card