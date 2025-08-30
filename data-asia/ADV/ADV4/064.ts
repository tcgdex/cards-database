import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "説明",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [295],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "音を破る",
			},
			effect: {
				ja: "対戦相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "低音制御",
			},
			effect: {
				ja: "対戦相手のポケモンの1つに30ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "雷鳴",
			},
			effect: {
				ja: "防御ポケモンは今混乱しています。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ハイパーボイス",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
