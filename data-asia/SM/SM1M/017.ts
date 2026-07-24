import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "チョンチー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "光の 届かない 海底に 暮らす。 触手を 光らせ 仲間と コミュニケーション。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サーチライト" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラになっている自分のサイドを1枚選び、そのカードのオモテを見てから、もとにもどす。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 30,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561618,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [170],
};

export default card;
