import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Igglybuff",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [174],
	hp: 30,
	types: ["Colorless"],
	stage: "Baby",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "視線",
			},
			effect: {
				ja: "ターン中に<em>（攻撃の前）</em> </em>、ポクモンパワーを持つ相手のベンチ付きポッコンを1つ選択します。そのパワーは、このターンの終わりまで機能しなくなります。この効果は、そのポクモンがベンチを離れると終了します。",
			},
		}],

	attacks: [],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
