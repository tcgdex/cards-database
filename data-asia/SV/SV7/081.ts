import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆炸頭水牛",
		'zh-cn': "爆炸頭水牛",
		ja: "バッフロン"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。",
		'zh-cn': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。",
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "潛力",
			'zh-cn': "潛力",
			ja: "そこぢから"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [626],

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "‌[特性]捲牆",
			'zh-cn': "‌[特性]捲牆",
			ja: "カーリーウォール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢與自己的其他「‌爆炸頭水牛」在場上，自己的所有【無】屬性的【基礎】寶可夢受到對手的寶可夢招式的傷害「-60」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			'zh-cn': "只要這隻寶可夢與自己的其他「‌爆炸頭水牛」在場上，自己的所有【無】屬性的【基礎】寶可夢受到對手的寶可夢招式的傷害「-60」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			ja: "このポケモンと、自分の別の「バッフロン」がいるかぎり、自分のタイプのたねポケモン全員が、相手のポケモンから受けるワザのダメージは「-60」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
		}
	}]
}

export default card
