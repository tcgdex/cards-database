import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ペラップ",
		'zh-tw': "聒噪鳥"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "巧みに 人語を 模倣する 芸達者。 齢 重ね 経験を 積んだ者は 言葉の 意味さえ 理解するという。",
		'zh-tw': "能將人類話語模仿得維妙維肖的表演家。 當隨著年齡增長而累積眾多經驗後， 甚至還能夠理解話語中的含意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "もってくる",
			'zh-tw': "呼喚"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "まくしたてる",
			'zh-tw': "口若懸河"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651021,
				tcgplayer: 569808,
				cardtrader: 234189,
			},
		},
	]
}

export default card