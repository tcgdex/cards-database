import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コクーン",
		'zh-tw': "鐵殼蛹"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "天敵に 見つからないように 葉っぱの 裏や 枝の すきまに 隠れて 進化の ときを 待つ。",
		'zh-tw': "為了不被天敵發現， 會躲在葉子背面或樹枝的間隙中， 等待進化的時刻到來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さなぎガード",
			'zh-tw': "蛹之防守"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "チクッ",
			'zh-tw': "刺痛"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card