import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウネルミナモex",
		'ko-kr': "굽이치는물결 ex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "こんぺきはとう",
				'ko-kr': "감벽 파도",
			},
			effect: {
				'ja-jp': "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'ko-kr': "이 포켓몬이 사용하는 기술의 데미지는 상대의 배틀 포켓몬에게 걸려 있는 효과를 계산하지 않는다.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "カタルシスロアー",
				'ko-kr': "카타르시스 로어",
			},
			damage: "120+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
				'ko-kr': "상대의 배틀 포켓몬이 특수 상태라면 120데미지를 추가한다.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752880,
				tcgplayer: 568433,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [1009],

	suffix: "EX",
};

export default card;
