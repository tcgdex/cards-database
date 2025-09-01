import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Entei Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "暗い状態",
			},
			effect: {
				ja: "RocketのEntei Exに暗闇のエネルギーが付着している限り、RocketのEntei Exには弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーリンク",
			},
			effect: {
				ja: "廃棄の山を検索して、エネルギーカードを装備し、ロケットのEntei Exに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "火山灰",
			},
			effect: {
				ja: "RocketのEntei Exに取り付けられた2つのエネルギーを捨ててから、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
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
