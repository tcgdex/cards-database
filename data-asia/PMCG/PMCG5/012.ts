import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのexeggcute",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [102],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "デフレクター",
			},
			effect: {
				ja: "対戦相手の次のターン中、エリカのexeggcuteがダメージを受けるたびに、そのダメージを半分に分割します（最も近い10に丸められます）。 （他の効果はまだ発生します。）",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "卵爆弾",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は防御するポケモンとエリカのexeggcuteには何もしません。",
			},
			damage: 40,
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
