import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "トルコール",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [324],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "助けを求めて泣きます",
			},
			effect: {
				ja: "デッキを検索して、ファイアポケモン（ポケモンエクスを除く）を検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "花火",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、トルコールに取り付けられた火エネルギーを捨ててください。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
