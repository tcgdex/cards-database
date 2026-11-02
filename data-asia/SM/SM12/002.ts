import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "キマワリ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "暑い 季節が 近づくと 顔の 花びらは 鮮やかになり 活発に 動くようになる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サンパワー" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、[草]または[炎]ポケモンが使うワザに必要なエネルギーは、すべてなくなる。（新しく出したポケモンも含む。）",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 80,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554752,
			},
		},
	],

	evolveFrom: {
		ja: "ヒマナッツ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [192],
};

export default card;
