import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バオップ",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "頭の ふさは 怒ると 温度が 上がり ３００度 以上になる。 木の実を ふさで 焼いて 食べる。",
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

	weaknesses: [{ type: "Water", value: "×2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [513],

	thirdParty: {
		cardmarket: 829016,
		tcgplayer: 636567,
	},
};

export default card;
