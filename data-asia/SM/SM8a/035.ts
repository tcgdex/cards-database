import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "古い お墓から ドーミラーに そっくりな 道具が 掘り出されたが 関係は わかっていない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬけがけしんか" },
			effect: {
				ja: "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558609,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [436],
};

export default card;
