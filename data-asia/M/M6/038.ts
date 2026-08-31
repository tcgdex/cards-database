import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	description: {
		ja: "丈夫な あごで 岩石を かみくだき 進む。 真っ暗な 地中でも 見える 目を 持つ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こうみつどアーマー" },
			effect: {
				ja: "このポケモンのHPがまんたんの状態なら、このポケモンが相手のポケモンから受けるワザのダメージは「-60」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハードスイング" },
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899941,
				tcgplayer: 709191,
			},
		},
	],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [208],
};

export default card;
