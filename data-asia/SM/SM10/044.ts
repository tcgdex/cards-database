import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ダグトリオ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "いつも 仲良しの ３つ子だが ごく まれに どの頭が 初めに エサを 食うかで 大ゲンカになる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ホームグランド" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557399,
			},
		},
	],

	evolveFrom: {
		ja: "ディグダ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [51],
};

export default card;
