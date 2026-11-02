import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアントex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いきなりけずる" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リベンジクラッシュ" },
			damage: "120+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793583,
				tcgplayer: 587721,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [632],

	suffix: "EX",
};

export default card;
