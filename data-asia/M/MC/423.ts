import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チヲハウハネ",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てつつぶし" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手の場に「未来」のポケモンがいるなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "スマッシュウイング" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863725,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [988],
};

export default card;
