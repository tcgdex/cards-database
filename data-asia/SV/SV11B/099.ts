import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内で １４００度の 炎を 燃やすことで ダンプカーを パンチで 破壊するほどの パワーを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: { ja: "相手のバトルポケモンをやけどにする。" },
		},
		{
			name: { ja: "スマッシュヘッド" },
			damage: 180,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ダルマッカ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [555],

	thirdParty: {
		cardmarket: 829342,
		tcgplayer: 636453,
	},
};

export default card;
