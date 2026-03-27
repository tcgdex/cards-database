import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオンex",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルロード" },
			effect: {
				ja: "自分の番に1回、このポケモンをベンチからバトル場に出したとき使える。自分の他のポケモンについている鋼エネルギーを好きなだけこのポケモンに移し替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワータックル" },
			damage: 200,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [638],

	suffix: "EX",
};

export default card;
