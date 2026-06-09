import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓頭夜鷹",
		'zh-cn': "貓頭夜鷹",
		ja: "ヨルノズク"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "極為柔軟的翅膀讓牠在 飛行時不發一絲聲響， 因此可以悄悄地接近獵物。",
		'zh-cn': "極為柔軟的翅膀讓牠在 飛行時不發一絲聲響， 因此可以悄悄地接近獵物。",
		ja: "非常に 柔らかい 羽は 飛ぶとき 音を 出さないので こっそり 獲物に 近づける。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "搜尋寶石",
			'zh-cn': "搜尋寶石",
			ja: "ほうせきさがし"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，若自己的場上有「太晶」寶可夢，則可使用1次。從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，若自己的場上有「太晶」寶可夢，則可使用1次。從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高速之翼",
			'zh-cn': "高速之翼",
			ja: "スピードウイング"
		},

		damage: 60,
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
	regulationMark: "H",
	rarity: "Rare",
	dexId: [164],

	thirdParty: {
		cardmarket: 779091
	}
}

export default card