import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Ampharos Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "導電率",
			},
			effect: {
				ja: "Ampharos Exがプレイしている限り、対戦相手がエネルギーカードを手から彼または彼女のポカモンに取り付けるときはいつでも、そのポカンに1つのダメージカウンターを置きます。複数のアンファロスがプレイされていても、1つ以上のダメージカウンターを置くことはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "ギガボルト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。尾の場合、防御するポケモンは麻痺しています。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
