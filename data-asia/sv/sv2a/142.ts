import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "プテラ",
		'zh-tw': "化石翼龍"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [142],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "のこぎりの ような キバは はがねポケモンの 皮膚さえ ズタズタに 切り裂いてしまう。",
		'zh-tw': "擁有像鋸子般的牙齒，就連鋼屬性寶可夢的 皮膚都能撕裂成碎片。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいかこうせん",
			'zh-tw': "退化光線"
		},

		damage: 100,

		effect: {
			ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			'zh-tw': "從對手的進化的戰鬥寶可夢身上，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card