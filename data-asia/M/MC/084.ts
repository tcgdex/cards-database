import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "尻尾を 振りまわして 相手を なぎ倒し 鋭い ツメで ズタズタに ひきさいてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863378,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [5],
};

export default card;
