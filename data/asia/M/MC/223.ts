import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン いどのめん",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "こんこんと 湧き出る 水のように 絶え間なく 技を 繰りだし続ける 攻守に 優れた 姿。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずかぐら" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[W]エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "バブルドレイン" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863519,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [1017],
};

export default card;
