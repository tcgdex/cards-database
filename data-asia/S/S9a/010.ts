import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "畢力吉翁V",
		ja: "ビリジオンV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "春草之風",
			ja: "わかくさのかぜ"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【草】能量的寶可夢不會陷入特殊狀態，並將受到的特殊狀態全部恢復。",
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "綠寶石利刃",
			ja: "エメラルドブレード"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card