import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クリムガン",
	},

	illustrator: "Kamome Shirahama",
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
			effect: { ja: "コインを1回投げオモテなら、60ダメージ追加。" },
		},
	],
	weaknesses: [],
	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [621],
	thirdParty: {
		cardmarket: 829509,
		tcgplayer: 636703,
	},
};

export default card;
