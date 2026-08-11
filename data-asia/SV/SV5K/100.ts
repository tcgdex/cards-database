import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "タケルライコex",
		ko: "날뛰는우레 ex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はじけるほうこう",
				ko: "터뜨린포효",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべてトラッシュし、山札を6枚引く。",
				ko: "자신의 패를 모두 트래쉬하고 덱을 6장 뽑는다.",
			},
		},
		{
			name: {
				ja: "きょくらいごう",
				ko: "극뇌굉",
			},
			damage: "70×",
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。",
				ko: "자신의 필드의 포켓몬에게 붙어 있는 기본 에너지를 원하는 만큼 트래쉬하고 그 장수 × 70데미지를 준다.",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752881,
				tcgplayer: 568434,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [1021],

	suffix: "EX",
};

export default card;
