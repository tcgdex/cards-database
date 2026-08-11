import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホイーガ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "高速で 回転し 相手に 突撃。 最高時速は およそ １００キロに 達する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ポイズンサークル" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863763,
			},
		},
	],

	evolveFrom: {
		ja: "フシデ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [544],
};

export default card;
