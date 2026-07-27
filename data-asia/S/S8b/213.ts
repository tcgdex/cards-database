import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コロトックV",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エキサイトステージ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。このポケモンがバトル場にいるなら、4枚になるように引く。この番、すでに別の「エキサイトステージ」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シザークロス" },
			damage: "80+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587011,
				tcgplayer: 571465,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [402],
};

export default card;
