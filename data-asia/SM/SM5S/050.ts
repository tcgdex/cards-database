import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ブニャット",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "体を 大きく 見せて 相手を 威圧するため ふたまたの 尻尾で ウエストを ぎゅっと 絞っている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わがものがお" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。トラッシュした場合、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "うっちゃらかす" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を、オモテを見ないで3枚になるまで、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560004,
			},
		},
	],

	evolveFrom: {
		ja: "ニャルマー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [432],
};

export default card;
