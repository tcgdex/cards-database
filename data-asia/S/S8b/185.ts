import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキノオー",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "ブリザードを 巻き起こす ポケモン。 大きな 体を 揺すれば あたり一面 すぐに 真っ白だ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "タフネスアップ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「いちげき」のポケモン（「ユキノオー」をのぞく）全員の最大HPは、それぞれ「50」大きくなる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メガトンパンチ" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586924,
				tcgplayer: 571437,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [460],
};

export default card;
