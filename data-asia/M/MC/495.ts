import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
	},

	illustrator: "CHORISO",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "ツノが 変形して できた 大あごが 頭に ついている。 鉄骨を 噛み切ってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 90,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863797,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [303],
};

export default card;
