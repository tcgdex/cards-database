import { Card } from "../../../interfaces"
import Set from "../S-P Japan"

const card: Card = {
	set: Set,

	name: {
		ja: "ウッウ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	dexId: [845],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "さんれんづき"
			},
			damage: "60×",
			effect: {
				ja: "コインを3回投げ、オモテの数×60ダメージ。"
			}
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,
	regulationMark: "G",

	description: {
		ja: "食いしん坊で エサの サシカマスを 丸飲みするが たまに 間違えて ほかの ポケモンに 食らいつく。"
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 573771,
		tcgplayer: 257102
	}
}

export default card
