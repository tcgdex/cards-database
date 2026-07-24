import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "キリンリキ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "尻尾にも 小さな 脳がある。 近寄ると においに 反応して かみついて くるので 注意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストおくり" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のトラッシュにある好きなカードを2枚、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "マインドショック" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558684,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [203],
};

export default card;
