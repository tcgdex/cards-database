import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いフラフィ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [180],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サンダースラッシュ",
			},
			effect: {
				ja: "防御ポケモンが基本的なポケモンである場合、防御するポケモンは現在麻痺しています。 Dark Flaaffyは、次のターン中にThunder Slashを使用できません。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
