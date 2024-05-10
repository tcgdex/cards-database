import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。",
		'zh-tw': "從遙遠的過去開始就被人當成能召喚雨雲的寶可夢而供奉著。 有時候會被埋進地下。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "オラクルプレス",
			'zh-tw': "神諭壓制"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "じんつうりき",
			'zh-tw': "神通力"
		},

		damage: "70+",

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、90ダメージ追加。",
			'zh-tw': "若自己的手牌與對手的手牌張數相同，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card