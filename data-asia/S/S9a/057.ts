import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "驚角鹿",
		ja: "オドシシ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "形狀怪異的犄角蘊含迷惑他人之力。從角上脫落的黑珠在磨碎後 可以入藥，用以治療失眠。",
		ja: "面妖な形の枝角は 見る者 惑わす力を 秘める。 抜け落ちた 角の 黒き珠を すり潰した 薬は 不眠に 効果あり。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "防守壓制",
			ja: "ガードプレス"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [234],

	thirdParty: {
		cardmarket: 609825
	}
}

export default card