import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "nidoranf",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "友達を探してください",
			},
			effect: {
				ja: "基本的なポケモンカードを公開するまで、デッキからカードを公開してください。そのカードを相手に見せて、あなたの手に入れてください。もう一方の公開されたカードをデッキにシャッフルします。 （基本的なポケモンを明らかにしない場合は、明らかになったカードをすべてデッキに戻してください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
