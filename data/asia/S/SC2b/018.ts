import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "喜歡吃長翅鷗和小篤兒。會對獵物施展猛烈的踢腿，再用銳利的爪子牢牢抓住。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "灼熱之羽"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【灼傷】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "音速飛行"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 120,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
