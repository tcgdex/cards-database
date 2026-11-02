import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン かまどのめん",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "かまどで 燃えさかる 炎のように 激しく 敵を 攻めたてる もっとも 攻撃的な 姿。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおかぐら" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[R]エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "やきこがす" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863444,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [1017],
};

export default card;
