import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナップ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "深い 森で 暮らす ポケモン。 頭に 生えた 葉っぱを 食べると 疲れが ウソのように 消える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札を1枚引く。" },
		},
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [511],

	thirdParty: {
		cardmarket: 829330,
		tcgplayer: 636443,
	},
};

export default card;
