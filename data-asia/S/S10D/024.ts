import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "クチート",
		'zh-tw': "大嘴娃"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [303],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "おとなしい 顔で 相手を 油断 させてから おおあごで がぶり。 噛みつくと 絶対に 放さない。",
		'zh-tw': "用溫順的長相讓對手大意，然後用大顎一口咬住對手。 咬住後就絕不會鬆口。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "あまいわな",
			'zh-tw': "甜甜圈套"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+90」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。在下個自己的回合，受到這個招式的寶可夢受到招式的傷害「+90」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650987,
				tcgplayer: 569779,
				cardtrader: 234090,
			},
		},
	]
}

export default card