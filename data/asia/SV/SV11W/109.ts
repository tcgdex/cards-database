import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バニリッチ",
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "雪山に 生息する ポケモン。 大昔 氷河期の ときに 南の 土地に 移動してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "バニプッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [583],
	thirdParty: {
		cardmarket: 829465,
		tcgplayer: 636662,
	},
};

export default card;
