import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのドラチーニ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [147],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "奇妙な障壁",
			},
			effect: {
				ja: "基本的なPokmon <em>（あなた自身を含む）による攻撃がエリカのDratini <em>（脱力感と抵抗を適用した後）</em>に20以上のダメージを与えたときはいつでも、その損傷を10に減らします（攻撃の他の効果はまだ起こります）",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールストライク",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
