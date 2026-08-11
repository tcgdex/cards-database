import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゲンガー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "影に憑きて 命 狙いし ポケモン。 己が影 ひとりでに 笑いしときは 一刻も早く 清めの札 握るべし。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ならくのうらもん" },
			effect: {
				'ja-jp': "このカードがトラッシュにあるなら、自分の番に1回使える。このカードをベンチに出す。その後、このポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スクリームサークル" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数×2個ぶんのダメカンを、相手のバトルポケモンにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657053,
				tcgplayer: 570737,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴースト",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [94],
};

export default card;
