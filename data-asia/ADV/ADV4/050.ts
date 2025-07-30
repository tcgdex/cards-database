import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "マチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ストライクバック",
			},
			effect: {
				ja: "マチョークがあなたのアクティブなポケモンであり、相手の攻撃によって損傷を受けている場合（マチョークがノックアウトされたとしても）、攻撃するポカンに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ローキック",
			},
			damage: 30,
		},
	],

	retreat: 1,

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
