import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン みどりのめん",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "身に着ける 仮面によって タイプが 変わる。 俊敏な 身のこなしと 蹴り技で 敵を 翻弄する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くさかぐら" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[G]エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "おにハンマー" },
			damage: 120,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「おにハンマー」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863372,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [1017],
};

export default card;
