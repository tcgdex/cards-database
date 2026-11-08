import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オノノクス",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'ja-jp': "優しい 性格だが 縄張りを 荒らす 者には 容赦しない。 鉄を 切る キバで 挑みかかる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ふりおろす" },
			damage: "80+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが進化ポケモンなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "アックスボンバー" },
			cost: ["Fighting", "Metal", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンがたねポケモンなら、そのポケモンをきぜつさせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{ type: "holo" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "オノンド",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [612],

	thirdParty: {
		cardmarket: 828606,
		tcgplayer: 636426,
	},
};

export default card;
