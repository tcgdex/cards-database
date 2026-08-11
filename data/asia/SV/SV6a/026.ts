import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "チヲハウハネ",
		'zh-tw': "爬地翅",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
		'zh-tw': "與古老書籍裡介紹的一種 叫做爬地翅的生物有著 相似點的神秘寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "てつつぶし",
				'zh-tw': "鐵碎",
			},
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手の場に「未来」のポケモンがいるなら、120ダメージ追加。",
				'zh-tw': "若對手的場上有「未來」寶可夢，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "スマッシュウイング",
				'zh-tw': "粉碎之翼",
			},
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773775,
				tcgplayer: 566277,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [988],
};

export default card;
