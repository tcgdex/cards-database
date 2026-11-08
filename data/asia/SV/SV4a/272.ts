import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナカヌチャン",
		'zh-tw': "巧鍛匠",
		'id-id': "Tinkatuff"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	dexId: [958],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。",
		'id-id': "Untuk membuat palu yang besar dan kuat, Tinkatuff menyerang kelompok Bisharp dan mengumpulkan logam dari mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "じゃれつく",
			'zh-tw': "嬉鬧",
			'id-id': "Main Kasar"
		},

		damage: "30+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ふんさいプレス",
			'zh-tw': "粉碎壓制",
			'id-id': "Tekanan Demolisi"
		},

		damage: 60,

		effect: {
			'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747626,
				tcgplayer: 567673,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card