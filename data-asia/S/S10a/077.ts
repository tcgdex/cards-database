import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "出し抜けに 村に現れ たちまち 米蔵を 空にする 大食漢。 古より 災厄のひとつと 数えられし行為なり。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "へいきなしぼう" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どっすんグースカ" },
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657056,
				tcgplayer: 570740,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [143],
};

export default card;
