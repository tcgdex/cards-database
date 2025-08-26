import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "クロコノー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [159],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "金切り声",
			},
			effect: {
				ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "ジョークランプ",
			},
			effect: {
				ja: "クロコノーがアクティブなポケモンである限り、対戦相手の次のターンの終わりまで、ディフェンディングポケモンは退却できません。攻撃、ポケモンパワー、またはトレーナーカードの効果がそのプレイヤーのアクティブなポケモンを変更すると、その効果の部分は何もしません。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
