import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢妖魔",
		ja: "ムウマージ"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "會喃喃唸誦詛咒的話語， 使對手激烈頭痛，或是看見 恐怖的幻覺，藉此折磨對手。",
		ja: "呪いの 言葉を つぶやいて ひどい 頭痛や 恐ろしい 幻を 見せて 苦しめる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "不祥言靈",
			ja: "ふきつなことだま"
		},

		effect: {
			'zh-tw': "查看對手的手牌。若對手的手牌有4張以上，則選擇卡直到其張數變為3張為止，將所選的卡放回對手的牌庫並重洗。",
			ja: "相手の手札を見る。相手の手札が4枚以上あるなら、その枚数が3枚になるまでカードを選び、選んだカードを相手の山札にもどして切る。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "幻象光線",
			ja: "サイケこうせん"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [429]
}

export default card