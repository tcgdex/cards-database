import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "クリムガン",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "日光を 翼で 受けて 体を 温める。 体温が 下がると 動けなくなってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきさく" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "おそいかかる" },
			damage: "90+",
			cost: ["Fire", "Water", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、60ダメージ追加。" },
		},
	],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [621],
};

export default card;
