import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		ja: "丈夫な アゴで 岩石を かみくだき 進む。 真っ暗な 地中でも 見える 目を 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "テールクラッシュ" },
			damage: "80+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559190,
			},
		},
	],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [208],
};

export default card;
