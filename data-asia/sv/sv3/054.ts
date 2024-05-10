import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ハカドッグ",
		'zh-tw': "墓揚犬"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [972],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "普段は 墓場で 眠っている。 数いる 犬ポケモンの中でも もっとも 主に 忠実だ。",
		'zh-tw': "平時都在墳場裡睡覺。在為數眾多的犬寶可夢中，牠是對主人最為忠實的。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "しにものぐるい",
			'zh-tw': "拼命"
		},

		damage: "80+",

		effect: {
			ja: "相手のサイドの残り枚数が4枚・2枚なら、120ダメージ追加。",
			'zh-tw': "若對手剩餘獎賞卡的張數為4張・2張，則增加120點傷害。"
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

	retreat: 3,
	regulationMark: "G"
}

export default card