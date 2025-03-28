import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン",
		'zh-tw': "頓甲",
		'zh-cn': "頓甲"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "普段は 落ち着いているが 一度 怒らせると 体を 丸めて 回転しながら 突っ込んでくる。",
		'zh-tw': "雖然平時性情穩重， 但一旦被激怒就會滾著 蜷起的身體猛衝過來。",
		'zh-cn': "雖然平時性情穩重， 但一旦被激怒就會滾著 蜷起的身體猛衝過來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "うちのめす",
			'zh-tw': "打垮",
			'zh-cn': "打垮"
		},

		damage: 40,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ガードローリング",
			'zh-tw': "防守回轉",
			'zh-cn': "防守回轉"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card