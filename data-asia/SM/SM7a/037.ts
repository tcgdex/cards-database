import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "丈夫な アゴで 岩石を かみくだき 進む。 真っ暗な 地中でも 見える 目を 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 90,
			cost: ["Metal", "Colorless", "Colorless"],
		},
		{
			name: { ja: "アイアンタックル" },
			damage: 170,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558925,
			},
		},
	],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [208],
};

export default card;
