import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "キューボン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スニベル",
			},
			effect: {
				ja: "防御するポケモンが相手の次のターン中にキューボンを攻撃する場合、攻撃によって与えられた損害は20（脱力感と抵抗を適用した後）に20増加します。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
			},

		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "キューボンの各ダメージカウンターで10ダメージに加えて10ダメージを与えます。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
