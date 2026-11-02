import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Avec Yoko",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "地中の 高い 圧力と 熱で 鍛えられた 体は あらゆる 金属よりも 硬い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どっすんフォール" },
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札にあるにげるためのエネルギーが4個のポケモンを好きなだけトラッシュし、その枚数×50ダメージ。",
			},
		},
		{
			name: { ja: "アイアンテール" },
			damage: "100×",
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555288,
			},
		},
	],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [208],
};

export default card;
