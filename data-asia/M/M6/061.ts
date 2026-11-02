import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノヤコマ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "お腹の 炎袋の 火力が 強まるほど 速く 飛べるが 点火するまで 時間が かかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899986,
				tcgplayer: 709214,
			},
		},
	],

	evolveFrom: {
		ja: "ヤヤコマ",
	},

	retreat: 0,
	regulationMark: "J",
	rarity: "Common",
	dexId: [662],
};

export default card;
