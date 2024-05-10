import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [965],
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。",
		'zh-tw': "據說牠是神秘的毒寶可夢鑽進了被放置在廢鐵工廠 的引擎裡而誕生的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card