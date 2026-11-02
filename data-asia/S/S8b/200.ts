import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "電気を 生みだす 力が 弱いので コンセントや ほかの 電気ポケモンから 盗むのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デデフラッシュ" },
			damage: "20+",
			cost: ["Psychic"],
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、60ダメージ追加し、相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586939,
				tcgplayer: 571452,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [702],
};

export default card;
