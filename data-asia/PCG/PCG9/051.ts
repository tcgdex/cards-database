import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "アンファロス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ホロンベール",
			},
			effect: {
				ja: "デッキ、廃棄の山、手、そしてそのカードにあるポカモンとして遊びで、それぞれの基本的なポカモンとエボリューションカードを扱います。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "デルタサークル",
			},
			effect: {
				ja: "20のダメージに加えて、カードにDがあるPokemonがある各ポケモンに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
