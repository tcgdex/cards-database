import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョット",
		'zh-tw': "大比鳥"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [18],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "美しい 羽を 広げて 相手を 威嚇する。 マッハ２で 空を 飛び回る。",
		'zh-tw': "會展開美麗的翅膀威嚇對手。 能以２馬赫的速度在空中四處飛行。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "そらをとぶ",
			'zh-tw': "飛翔"
		},

		damage: 150,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
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