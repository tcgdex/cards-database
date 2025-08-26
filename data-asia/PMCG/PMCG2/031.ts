import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "プライム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "かんしゃく",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、プライムエーパーは（ダメージを与えた後）混乱しています。",
			},
			damage: 50,
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
