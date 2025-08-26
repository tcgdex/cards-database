import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "カクナ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [14],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "毒を分泌します",
			},
			effect: {
				ja: "対戦相手の次のターン中、相手の攻撃がカクナに損害を与えるときはいつでも（カクナがノックアウトされたとしても）、相手のアクティブなポケモンが毒され、カクナは相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
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
