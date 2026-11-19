import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ワシボン",
		'zh-tw': "毛頭小鷹"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [627],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "雛鳥の姿 なれど 血の気 多し。 ことあるごとに 親鳥に 戦を 仕掛け 己が力を 示さんと 躍起なり。",
		'zh-tw': "雖然還是雛鳥，但性情暴躁易怒。 經常藉故向親鳥挑起鬥爭， 為展示自己的力量而奮力搏擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "かぎづめ",
			'zh-tw': "鉤爪"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
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
				cardmarket: 651023,
				tcgplayer: 569810,
				cardtrader: 234191,
			},
		},
	]
}

export default card