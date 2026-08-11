import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クリムガン",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'ja-jp': "日光を 翼で 受けて 体を 温める。 体温が 下がると 動けなくなってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきさく" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "おそいかかる" },
			damage: "90+",
			cost: ["Fire", "Water", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863846,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [621],
};

export default card;
