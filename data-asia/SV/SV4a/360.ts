import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドンex"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ディノクライ"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、番は終わる。自分のトラッシュから「基本{F}エネルギー」を2枚まで選び、自分の{F}タイプのたねポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		name: {
			ja: "ワイルドインパクト"
		},

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 220,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747714,
				tcgplayer: 567757,
				cardtrader: 270318,
			},
		},
	]
}

export default card