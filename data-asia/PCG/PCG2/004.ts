import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "おしっこ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "責任",
			},
			effect: {
				ja: "ダメージカウンターは、ノックアウトされることから10馬力になるまで防御ポケモンに置きます。 Weezingはそれ自体に70のダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "スモッグスクリーン",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
