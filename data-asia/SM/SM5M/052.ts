import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "人懐っこく 子どもが 大好き。 仲良しの 子どもと 遊ぶために 山奥から 町に 降りてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきりん" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "りゅうのはどう" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559865,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [780],
};

export default card;
