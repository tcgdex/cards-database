import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "バタフリー",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "羽を 包む りん粉は 猛毒。 キャタピーを 狙う とりポケモンを 見つけると ふりかけて 追い払うぞ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "トリプルチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを3枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558122,
			},
		},
	],

	evolveFrom: {
		ja: "トランセル",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [12],
};

export default card;
