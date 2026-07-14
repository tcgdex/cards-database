import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ケララッパ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "敵に 出会うと クチバシに 溜めこんでいた 多くの 木の実の タネを 放射状に 撃ちだす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "そらをとぶ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888329,
			},
		},
	],

	evolveFrom: {
		ja: "ツツケラ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [732],
};

export default card;
