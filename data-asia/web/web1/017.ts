import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いアイビサウルス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 50,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ブドウの引っ張り",
			},
			effect: {
				ja: "ダークイヴィサウルスが退却する順番中に、相手のベンチポケモンを1つ選択し、アクティブなポケモンと交換します。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "フューリーストライク",
			},
			effect: {
				ja: "対戦相手は、3つのマーカーをポケモンに置きます（選択したように分割されています）。 （同じポケモンに1つ以上のマーカーを置くことができます。）その後、この攻撃は、各マーカーに対して各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。ターンの終わりにマーカーを取り外します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
