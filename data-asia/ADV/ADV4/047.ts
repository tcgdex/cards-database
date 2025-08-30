import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "バネット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [354],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "シャドウスチール",
			},
			effect: {
				ja: "対戦相手の捨てられた山の各特別なエネルギーカードに対して、10のダメージと20のダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "闇の聖歌",
			},
			effect: {
				ja: "廃棄パイルに基本的なポケモンまたは進化カードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。このようにして、ディフェンディングポケモンに6つ以上のダメージカウンターを置くことはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
