import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペラップ",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アカペラ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "かぜおこし" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863899,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [441],
};

export default card;
