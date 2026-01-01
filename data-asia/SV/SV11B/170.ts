import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタex",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "デビューライブ" },
			effect: {
				ja: "このポケモンは、先攻プレイヤーの最初の番でも、ワザが使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エコーボイス" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "次の自分の番、このポケモンの「エコーボイス」のダメージは「+80」される。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
};

export default card;
