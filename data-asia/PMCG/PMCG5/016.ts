import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのスキタイヤー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "影の画像",
			},
			effect: {
				ja: "RocketのScytherが攻撃されるたびに、相手はコインをひっくり返します。尾の場合、その攻撃はロケットのスキタイヤーにダメージを与えません。 （攻撃の他の効果はまだ発生します。）この効果は、ロケットのスキーターがダメージを受けるまで続きます（またはベンチにされるか、進化します）。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "裂け目",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
