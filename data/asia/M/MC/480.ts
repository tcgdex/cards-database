import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "翼と 尾羽を 広げて 赤く 輝くとき 生き物の 命を 吸い取る 伝説の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしばむかぜ" },
			cost: ["Darkness"],
			effect: {
				ja: "ダメカンがのっている相手のポケモン全員に、それぞれダメカンを2個のせる。",
			},
		},
		{
			name: { ja: "はかいビーム" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863782,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [717],
};

export default card;
