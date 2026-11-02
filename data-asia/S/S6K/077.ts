import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロスV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バレットパンチ" },
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "シンクロハンマー" },
			damage: "60+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560978,
				tcgplayer: 569305,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [376],
};

export default card;
