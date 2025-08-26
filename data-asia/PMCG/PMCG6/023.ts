import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのムック",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "エネルギー排水",
			},
			effect: {
				ja: "相手の攻撃がKogaのMUKにダメージを与えた場合（KogaのMukがノックアウトされたとしても）、コインをひっくり返します。ヘッドとそれがある場合は、攻撃するポクモンに1枚のエネルギーカードを選択して破棄します。コガのMUKがすでに眠っている場合、相手が攻撃したときに眠ったり、混乱したり、麻痺したりしている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "スラッジ渦",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
