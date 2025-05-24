import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワパレス",
		'zh-tw': "岩殿居蟹",
		'zh-cn': "岩殿居蟹"
	},

	illustrator: "Po-Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [558],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
		'zh-tw': "厚實的鉗子是牠最大的武器。 硬度高到甚至能讓 超甲狂犀的護具裂開。",
		'zh-cn': "厚實的鉗子是牠最大的武器。 硬度高到甚至能讓 超甲狂犀的護具裂開。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのいしやど",
			'zh-tw': "神秘石居",
			'zh-cn': "神秘石居"
		},

		effect: {
			ja: "このポケモンは、相手の「ポケモンex」からワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【ex】」招式的傷害。",
			'zh-cn': "這隻寶可夢不會受到對手的「寶可夢【ex】」招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "グレートシザー",
			'zh-tw': "偉大剪",
			'zh-cn': "偉大剪"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card