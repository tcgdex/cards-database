import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "電極",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "エネルギースパイク",
			},
			effect: {
				ja: "デッキを検索して、基本的なエネルギーカードを検索し、ポケモンの1枚に添付してください。その後、デッキをシャッフルします。",
			},
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

export default card
