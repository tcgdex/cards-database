import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルトロス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "ボルトロスが 通り過ぎた 土地には 雷の 落ちた 無数の 跡が 焼け焦げとなって 残っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[L]エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ディザスターボルト" },
			damage: 110,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863554,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [642],
};

export default card;
