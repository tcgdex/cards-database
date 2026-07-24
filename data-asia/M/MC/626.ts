import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イキリンコ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "緑色の 羽の イキリンコが 最大勢力。 エサを 探す 朝と 晩は とても 騒がしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くわえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ハイパーボイス" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863928,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [931],
};

export default card;
