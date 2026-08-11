import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キョウのベトベトン",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "エネルギー排水",
			},
			effect: {
				'ja-jp': "相手の攻撃がKogaのMUKにダメージを与えた場合（KogaのMukがノックアウトされたとしても）、コインをひっくり返します。ヘッドとそれがある場合は、攻撃するポクモンに1枚のエネルギーカードを選択して破棄します。コガのMUKがすでに眠っている場合、相手が攻撃したときに眠ったり、混乱したり、麻痺したりしている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "スラッジ渦",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575353
			},
		},
	],
};

export default card
