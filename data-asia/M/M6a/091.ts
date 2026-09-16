import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 打ち鳴らして 相手の 度胸を 試す。 弱い者は その 音に 恐れ 逃げ出すのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ブレイジングアッパー" },
			damage: 250,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908269,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [784],
};

export default card;
