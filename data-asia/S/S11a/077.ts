import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ロコンV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホワイトドロップ" },
			damage: "10+",
			cost: [],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンV」なら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "フロストスマッシュ" },
			damage: 110,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673394,
				tcgplayer: 570840,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [37],
};

export default card;
