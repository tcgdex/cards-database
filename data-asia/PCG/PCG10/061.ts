import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Skarmory Ex",
	},


	category: "Pokemon",
	dexId: [227],
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "金属重力",
			},
			effect: {
				ja: "対戦相手のアクティブなPokã©Mon Retreatsが残り40以上のHPがある場合は、そのPokã©Monに3つのダメージカウンターを入れます。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
			},
			damage: 30,
		},
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				ja: "かみそりの翼",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
