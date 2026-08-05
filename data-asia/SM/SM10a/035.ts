import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "オノンド",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "大岩を 砕く キバを 持つ。 縄張りを 巡る オノンドたちの 争いは 非常に 激しい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ハサミギロチン" },
			damage: 70,
			cost: ["Fire", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557314,
			},
		},
	],

	evolveFrom: {
		ja: "キバゴ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [611],
};

export default card;
