import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕咕",
		ja: "ホーホー"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是用單腳站立。由於換腳的速度太快， 很難用肉眼看清換腳的瞬間。",
		ja: "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "崗哨",
			ja: "みはりばん"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的備戰寶可夢身上附加的基本能量，不會受到對手的物品或者支援者的效果影響而丟棄。",
			ja: "このポケモンがいるかぎり、自分のベンチポケモンについている基本エネルギーは、相手のグッズまたはサポートによる、トラッシュする効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "羽擊",
			ja: "はばたく"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [163]
}

export default card