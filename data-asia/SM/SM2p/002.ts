import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツドン",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "葉っぱの 部分は カッターになって 相手を 切り裂く。 口からは なんでも 溶かす 液体を 吐く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どろろえき" },
			damage: 40,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561205,
			},
		},
	],

	evolveFrom: {
		ja: "マダツボミ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [70],
};

export default card;
