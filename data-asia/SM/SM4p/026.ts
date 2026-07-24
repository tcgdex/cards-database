import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・レヒレ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "深い霧で 敵を 惑わせ 自滅させる 恐ろしさを 持つ。 海流が エネルギーの 源。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずのはどう" },
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "かがやくかいりゅう" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "この番、自分の[水]ポケモンのHPを回復していたなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560059,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [788],
};

export default card;
