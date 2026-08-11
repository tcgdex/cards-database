import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キリンリキ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "尻尾にも 小さな 脳がある。 近寄ると においに 反応して かみついて くるので 注意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストおくり" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のトラッシュにある好きなカードを2枚、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "マインドショック" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804750,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "Promo",
	dexId: [203],
};

export default card;
