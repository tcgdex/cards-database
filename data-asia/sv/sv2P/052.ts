import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アーマーガア",
		'zh-tw': "鋼鎧鴉"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [823],
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "飛行中 天敵に 狙われて 客も 危険なので パルデアでは タクシーの 仕事が できないのだ。",
		'zh-tw': "如果在飛行中遭到天敵的襲擊，也會給乘客帶來危險，因此在 帕底亞無法從事計程車的工作。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "アクセレート",
			'zh-tw': "增速"
		},

		damage: 50,

		effect: {
			ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "若對手的寶可夢因這個招式的傷害而【昏厥】了，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "スピニングバード",
			'zh-tw': "旋轉鳥擊"
		},

		damage: 200,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
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

	retreat: 2,
	regulationMark: "G"
}

export default card