import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーブル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "自分の 縄張りを 示す マークを 描き散らすので ドーブルの 多い 街の 壁は 落書き だらけ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "そっくりなぞる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。のぞむなら、その中にあるサポートを1枚選び、その効果を、このワザの効果として使う。",
			},
		},
		{
			name: { ja: "テールスマッシュ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558709,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [235],
};

export default card;
