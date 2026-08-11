import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンテール",
		'zh-tw': "獵斑魚",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "深海に 生息。 ハンテールが 浜に 打ちあがると 不吉なことが 起こるという 言い伝えが ある。",
		'zh-tw': "棲息在深海中。傳說如果有獵斑魚被沖上沙灘，就會有不好的事發生。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "いちげきジャマー",
				'zh-tw': "妨礙一擊者",
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手の「いちげき」のポケモンは、ワザを使うためのエネルギーが、【無】エネルギー1個ぶん多くなる。",
				'zh-tw': "只要這隻寶可夢在場上，對手的「一擊」寶可夢使用招式所需的能量增加1個【無】能量。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ばっくりバイト",
				'zh-tw': "深咬",
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575579,
				tcgplayer: 569525,
			},
		},
	],

	evolveFrom: {
		ja: "パールル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [367],
};

export default card;
