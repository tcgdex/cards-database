import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "臨終の 際に 現れて 魂が 肉体を 離れると すかさず 吸い取ってしまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふえるあかり" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から「ランプラー」を3枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [608],

	thirdParty: {
		cardmarket: 888278,
	},
};

export default card;
