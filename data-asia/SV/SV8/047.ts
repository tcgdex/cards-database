import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲキッス",
		'zh-tw': "波克基斯",
		'zh-cn': "波克基斯"
	},

	illustrator: "Narano",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [468],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "争い事や もめ事が 起こる 場所には 姿を 見せない。 近ごろは ほとんど 見かけない。",
		'zh-tw': "不會出現在發生 爭端和紛亂的地方。 近來幾乎見不到牠的身影。",
		'zh-cn': "不會出現在發生 爭端和紛亂的地方。 近來幾乎見不到牠的身影。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ワンダーキッス",
			'zh-tw': "奇跡之吻",
			'zh-cn': "奇跡之吻"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトルポケモンがきぜつするたび、自分はコインを1回投げる。オモテなら、サイドを1枚多くとる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			'zh-tw': "只要這隻寶可夢在場上，每次當對手的戰鬥寶可夢【昏厥】時，自己擲1次硬幣。若為正面，則多獲得1張獎賞卡。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			'zh-cn': "只要這隻寶可夢在場上，每次當對手的戰鬥寶可夢【昏厥】時，自己擲1次硬幣。若為正面，則多獲得1張獎賞卡。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			'zh-tw': "高速之翼",
			'zh-cn': "高速之翼"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card