import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		de: "Elezard",
		'pt-br': "Heliolisk",
		ko: "일레도리자드"
	},

	illustrator: "otumami",
	category: "Pokemon",

	dexId: [695],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			es: "Ataque Rápido",
			it: "Attacco Rapido",
			de: "Ruckzuckhieb",
			'pt-br': "Ataque Rápido",
			ko: "전광석화"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 40데미지를 추가한다."
		},

		damage: "40+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
		fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
		es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
		it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
		de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
		'pt-br': "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
		ko: "깃을 펼쳐 태양광을 받으면\n대도시에서 사용할 수 있는\n전기를 혼자서 발전한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
