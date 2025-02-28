import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ネッコアラ",
		'zh-tw': "樹枕尾熊",
		'zh-cn': "樹枕尾熊"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [775],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "一生を 眠ったまま 過ごす。 ネッコアラのみが 毒を 分解できる 猛毒の 葉っぱが エサ。",
		'zh-tw': "終其一生都在睡覺。 作為主食的樹葉帶有劇毒， 只有樹枕尾熊才能將毒分解。",
		'zh-cn': "終其一生都在睡覺。 作為主食的樹葉帶有劇毒， 只有樹枕尾熊才能將毒分解。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おやすみノック",
			'zh-tw': "晚安敲擊",
			'zh-cn': "晚安敲擊"
		},

		damage: 30,

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。",
			'zh-cn': "將雙方的戰鬥寶可夢【睡眠】。在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card