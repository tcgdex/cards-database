import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥",
		'zh-cn': "七夕青鳥",
		ja: "チルタリス"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "在晴朗的日子會混在雲朵中， 自在地在空中來回飛行。 會用美妙的高音歌唱。",
		'zh-cn': "在晴朗的日子會混在雲朵中， 自在地在空中來回飛行。 會用美妙的高音歌唱。",
		ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛びまわり 美しい ソプラノで 歌う。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "哼唱充能",
			'zh-cn': "哼唱充能",
			ja: "ハミングチャージ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "棉花之翼",
			'zh-cn': "棉花之翼",
			ja: "コットンウイング"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
		},

		damage: 100,
		cost: ["Water", "Metal"]
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [334]
}

export default card