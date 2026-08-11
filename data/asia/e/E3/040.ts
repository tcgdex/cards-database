import { Card } from "../../../interfaces"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		ja: "オクリリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [224],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "吸引カップ",
			},
			effect: {
				ja: "オクティラーがアクティブなポケモンである限り、防御するポケモンが後退するたびに、ベンチに行くときに防御するポクモンに取り付けられたすべてのエネルギーカードを捨てます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "unlimited",
		}, {
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
