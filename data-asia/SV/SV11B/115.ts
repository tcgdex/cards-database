import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "フリージオ",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "体温が 上がると 水蒸気に なって 姿を 消す。 体温が 下がると 元の 氷に 戻る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきずりだす" },
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに20ダメージ。",
			},
		},
		{ name: { ja: "つらら" }, damage: 30, cost: ["Water"] },
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [615],

	thirdParty: {
		cardmarket: 829358,
		tcgplayer: 636469,
	},
};

export default card;
