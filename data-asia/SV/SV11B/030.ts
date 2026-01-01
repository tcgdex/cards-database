import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "フリージオ",
	},

	illustrator: "Kyoko Umemoto",
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [615],
};

export default card;
