import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリジオン",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "仲間を 守るため 人間に 戦いを 挑んだ ポケモン。 伝説で 語り継がれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "エメラルドブレード" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
			effect: { ja: "次の自分の番、このポケモンはワザが使えない。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [640],
	thirdParty: {
		cardmarket: 829450,
		tcgplayer: 636648,
	},
};

export default card;
