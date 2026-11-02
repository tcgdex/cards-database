import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロン",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "人懐っこく 子どもが 大好き。 仲良しの 子どもと 遊ぶために 山奥から 町に 降りてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りゅうのちえ" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを1枚、自分の[竜]ポケモンにつける。",
			},
		},
		{
			name: { ja: "ハイパーボイス" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559326,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [780],
};

export default card;
