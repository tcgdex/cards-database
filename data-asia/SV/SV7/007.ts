import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強顎雞母蟲",
		'zh-cn': "強顎雞母蟲",
		ja: "アゴジムシ"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "會吐出黏糊糊的絲纏住樹枝 並猶如擺錘般地晃動身體， 藉此在樹木之間輕巧地移動。",
		'zh-cn': "會吐出黏糊糊的絲纏住樹枝 並猶如擺錘般地晃動身體， 藉此在樹木之間輕巧地移動。",
		ja: "ネバネバの 糸を 吐いて 枝に 巻きつけ 振り子の 動きで 木から 木へと 身軽に 飛び移る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "伏擊",
			'zh-cn': "伏擊",
			ja: "おそいかかる"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加30點傷害。",
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [736],

	thirdParty: {
		cardmarket: 779006
	}
}

export default card