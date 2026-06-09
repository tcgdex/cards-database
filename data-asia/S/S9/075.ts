import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈咬陸鯊",
		ja: "ガブリアス"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在火山區的山中。會以不遜於噴射戰鬥機的速度在 天空飛行，盡情地獵取獵物。",
		ja: "火山性の 山に すみつく。 ジェット機に 負けない 速さで 空を 飛び 獲物を 狩りまくる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "音速迴避",
			ja: "おんそくかいひ"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在下個對手的回合結束前，這隻寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "龍之利刃",
			ja: "リューノブレード"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方2張卡丟棄。",
			ja: "自分の山札を上から2枚トラッシュする。"
		},

		damage: 160,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [445],

	thirdParty: {
		cardmarket: 605926
	}
}

export default card