import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "未来を 予知する 力を もつ。 トレーナーを 守る ときに 最大 パワーを 発揮する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "リファイン" },
			effect: {
				ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 120,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673389,
				tcgplayer: 570835,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [282],
};

export default card;
