import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのモルト",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "再生",
			},
			effect: {
				ja: "ロケットのモルトがノックアウトされるたびに、それを捨てた後、あなたはそれを手に戻すことができます。ロケットのモルトが眠っている場合、それがノックアウトされたときに眠ったり、混乱したり、麻痺したりした場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "火の壁",
			},
			effect: {
				ja: "攻撃が相手の次のターン中にロケットのモルトのダメージを与えた場合（ロケットのモルトがノックアウトされたとしても）、ロケットのモルトレスは相手のアクティブなポケモンを10ダメージで攻撃します。 （衰弱と抵抗を適用します。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
