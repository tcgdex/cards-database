import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "政治",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [186],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "カエルの歌",
			},
			effect: {
				ja: "Politoedの攻撃が防御するPokmon <em>（衰弱と抵抗を適用した後）</em>に損害を与えるときはいつでも、3つ以上のポリワグ、ポリハール、ポリワラス、および/または政治<em>を含む<em>を含む）</em>、攻撃は40以上のダメージを与えます（このパワーは、政治が眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
