import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオキのムックル",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "群れを 作ることで １匹での 弱さを カバーし合っているが 群れが 大きくなると もめだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かっくう" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863892,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [396],
};

export default card;
