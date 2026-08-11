import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー&ピィ&ププリンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがりパニック" },
			damage: "120+",
			cost: ["Fairy", "Fairy", "Colorless"],
			effect: {
				ja: "ラが出るまでコインを投げ、オモテの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "シュープリームGX" },
			cost: ["Fairy", "Fairy"],
			effect: {
				ja: "の番が終わったら、もう1回自分の番を始める。追加で[妖]エネルギーが14個ついているなら、相手のベンチポケモン全員と、そのポケモンについているすべてのカードを、相手の山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544671,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [175, 173, 174],

	suffix: "TAG TEAM-GX",
};

export default card;
