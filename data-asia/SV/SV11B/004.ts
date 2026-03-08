import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナップ",
	},

	illustrator: "kurumitsu",
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

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [511],

	thirdParty: {
		cardmarket: 828435,
		tcgplayer: 636358,
	},
};

export default card;
