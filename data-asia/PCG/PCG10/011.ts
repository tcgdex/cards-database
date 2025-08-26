import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "フレアオンスター",
	},

	rarity: "Rare Holo",
	category: "Pokemon",
	dexId: [136],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クリムゾンレイ",
			},
			effect: {
				ja: "ターン中に、手からflareon {{star | thispokã©mon}}をベンチに置くと、このパワーを使用できます。それぞれのアクティブなPokã©Mon（あなたと相手の両方）が燃やされています。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "火炎放射器",
			},
			effect: {
				ja: "Flareon {{Star | This Pokemon}}に取り付けられた火エネルギーを捨てます。",
			},
			damage: 50,
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
