import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "オノノクス",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		ja: "優しい 性格だが 縄張りを 荒らす 者には 容赦しない。 鉄を 切る キバで 挑みかかる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ふりおろす" },
			damage: "80+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "アックスボンバー" },
			cost: ["Fighting", "Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、そのポケモンをきぜつさせる。",
			},
		},
	],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "オノンド",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [612],
};

export default card;
