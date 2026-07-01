import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ヌメラ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "ヌメヌメの 粘膜で 覆われた 体は 敵の パンチや キックを ヌルリと 滑らせてしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すいとる",
			},
			damage: 30,
			cost: ["Water", "Psychic"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [704],

	thirdParty: {
		cardmarket: 876963
	}
};

export default card;
