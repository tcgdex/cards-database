import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュV",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダミードール" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。次の相手の番の終わりまで、この「ミミッキュV」は、相手のポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "うらやむひとみ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×3個ぶんのダメカンを、相手のバトルポケモンにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587031,
				tcgplayer: 571485,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [778],
};

export default card;
