import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'de-de': "Skaraborn",
		'pt-br': "Heracross",
		'ko-kr': "헤라크로스"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [214],
	hp: 100,
	types: ["Grass"],

	description: {
		'en-us': "It loves sweet nectar. To keep all the nectar to itself, it hurls rivals away with its prized horn.",
		'fr-fr': "Il aime tellement la sève qu'il la défend\njalousement : à l'aide de son imposante corne,\nil projette quiconque s'en approche dans les airs.",
		'es-es': "Le encanta la savia dulce y usa su cuerno para lanzar\npor los aires a cualquiera que se acerque a ella.",
		'it-it': "È ghiotto della dolce linfa degli alberi e\nper non farsela rubare scaglia lontano\ni nemici con il suo possente corno.",
		'de-de': "Es liebt süßen Baumsaft. Mit seinem Horn, auf\ndas es sehr stolz ist, schleudert es Rivalen hinfort,\num allen Baumsaft für sich zu beanspruchen.",
		'pt-br': "Este Pokémon adora néctar doce. Para ficar com todo\no néctar para si mesmo, arremessa os rivais para longe\ncom seu chifre precioso.",
		'ko-kr': "달콤한 꿀을 아주 좋아해서\n혼자 독차지하기 위해\n자랑스런 뿔을 써서 상대를 내동댕이친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Single-Horn Throw",
			'fr-fr': "Lancer Unicorne",
			'es-es': "Lanzamiento Cuerno",
			'it-it': "Lancio Monocorno",
			'de-de': "Einzelhornwurf",
			'pt-br': "Arremesso Unicórnio",
			'ko-kr': "한판던지기"
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 70 more damage.",
			'fr-fr': "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 70 dégâts de plus.",
			'es-es': "Lanza 2 monedas. Si en las dos sale cara, este ataque hace 70 puntos de daño más.",
			'it-it': "Lancia 2 volte una moneta. Se esce testa entrambe le volte, questo attacco infligge 70 danni in più.",
			'de-de': "Wirf 2 Münzen. [Gr:Count p=\"Zeigen alle Münzen Kopf,\" one=\"Bei Kopf\" two=\"Zeigen beide Münzen Kopf,\" ] fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 70 pontos de dano a mais.",
			'ko-kr': "동전을 2번 던져서 모두 앞면이 나오면 70데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
