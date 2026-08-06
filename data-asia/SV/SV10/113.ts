import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ハルクジラex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆきにまぎれる" },
			effect: {
				ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "クラッシュプレス" },
			damage: "140+",
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821945,
				tcgplayer: 629054,
			},
		},
	],

	evolveFrom: {
		ja: "アルクジラ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [975],

	suffix: "EX",
};

export default card;
