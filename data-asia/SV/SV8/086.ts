import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カクレオン",
		'zh-tw': "變隱龍",
		'zh-cn': "變隱龍"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [352],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "身体の 色を 変えて 景色に 溶け込む。 長く かまわないでいると スネて 姿を 見せなくなる。",
		'zh-tw': "能改變體色，融入周圍的景色中。 如果長時間不去理會牠， 牠就會鬧彆扭而不肯現身。",
		'zh-cn': "能改變體色，融入周圍的景色中。 如果長時間不去理會牠， 牠就會鬧彆扭而不肯現身。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かくれじょうず",
			'zh-tw': "躲藏高手",
			'zh-cn': "躲藏高手"
		},

		effect: {
			ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			'zh-cn': "這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ベロウィップ",
			'zh-tw': "舌之鞭打",
			'zh-cn': "舌之鞭打"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793520
	}
}

export default card