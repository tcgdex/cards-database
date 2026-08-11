import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ドデカバシ",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "番いの ドデカバシは クチバシの 温度を 上げて 温めあうので 仲良しの シンボルと されている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スカイドロー" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フェザーロンド" },
			damage: "60+",
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888330,
			},
		},
	],

	evolveFrom: {
		ja: "ケララッパ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [733],
};

export default card;
