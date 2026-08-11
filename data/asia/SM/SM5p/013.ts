import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "電磁波を 放ち 空を 漂う。 電気を 喰っているときに 触ると 全身が ビリッと 痺れるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マグネサーチ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[雷]エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559763,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [81],
};

export default card;
