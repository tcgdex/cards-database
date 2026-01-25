import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ビリジオン",
	},

	illustrator: "Felicia Chen",
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

	weaknesses: [{ type: "Fire", value: "×2" }],

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [640],

	thirdParty: {
		cardmarket: 828983,
		tcgplayer: 636563,
	},
};

export default card;
