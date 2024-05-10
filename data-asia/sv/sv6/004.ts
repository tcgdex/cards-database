import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "バルビート",
		'zh-tw': "電螢蟲"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Orca",
	dexId: [313],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "お尻の 光を 点滅させて 仲間と 会話する。 イルミーゼの 出す 甘い 香りが 大好き。",
		'zh-tw': "會閃爍臀部的光芒 來與夥伴交流。最喜歡 甜甜螢放出的甜甜香氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファストサイン",
			'zh-tw': "急速信號"
		},

		effect: {
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "這個招式可在先攻玩家的最初回合使用。從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "れんけいアタック",
			'zh-tw': "聯合攻擊"
		},

		damage: "20+",

		effect: {
			ja: "自分のベンチに「イルミーゼ」がいるなら、60ダメージ追加。",
			'zh-tw': "若自己的備戰區有「甜甜螢」，則增加60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
