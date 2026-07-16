import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フラエッテ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "花を 育て 自分の 武器として 利用。 美しく咲いた 花ほど 強力なパワーを 秘めている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はなつみ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554923,
			},
		},
	],

	evolveFrom: {
		ja: "フラベベ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [670],
};

export default card;
