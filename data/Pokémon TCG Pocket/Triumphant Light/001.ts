import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		de: "Skaraborn",
		'pt-br': "Heracross",
		ko: "헤라크로스"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "It loves sweet nectar. To keep all the nectar to itself, it hurls rivals away with its prized horn.",
		fr: "Il aime tellement la sève qu'il la défend\njalousement : à l'aide de son imposante corne,\nil projette quiconque s'en approche dans les airs.",
		es: "Le encanta la savia dulce y usa su cuerno para lanzar\npor los aires a cualquiera que se acerque a ella.",
		it: "È ghiotto della dolce linfa degli alberi e\nper non farsela rubare scaglia lontano\ni nemici con il suo possente corno.",
		de: "Es liebt süßen Baumsaft. Mit seinem Horn, auf\ndas es sehr stolz ist, schleudert es Rivalen hinfort,\num allen Baumsaft für sich zu beanspruchen.",
		'pt-br': "Este Pokémon adora néctar doce. Para ficar com todo\no néctar para si mesmo, arremessa os rivais para longe\ncom seu chifre precioso.",
		ko: "달콤한 꿀을 아주 좋아해서\n혼자 독차지하기 위해\n자랑스런 뿔을 써서 상대를 내동댕이친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Single-Horn Throw"
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
