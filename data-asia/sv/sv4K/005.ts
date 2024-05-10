import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "イワパレス",
		'zh-tw': "岩殿居蟹"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [558],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
		'zh-tw': "厚實的鉗子是牠最大的武器。硬度高到甚至能讓 超甲狂犀的護具裂開。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "がんぺきバッシュ",
			'zh-tw': "峭壁猛擊"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このポケモンが進化ポケモンから受けるワザのダメージは「-100」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到進化寶可夢招式的傷害「-100」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card