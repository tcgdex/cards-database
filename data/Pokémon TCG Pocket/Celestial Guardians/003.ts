import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		de: "Gehweiher",
		'pt-br': "Surskit",
		ko: "비구술"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "They usually live on ponds, but after an evening shower, they may appear on puddles in towns.",
		fr: "Ils vivent généralement dans les étangs,\nmais on peut en trouver dans les flaques\nd'eau en ville, après les averses.",
		es: "Vive en estanques, pero, cuando se desata una tormenta,\npuede aparecer en los charcos que se forman en las ciudades.",
		it: "Normalmente vivono negli stagni, ma dopo un acquazzone\npossono comparire persino nelle pozzanghere delle città.",
		de: "Normalerweise leben sie in Teichen, aber nach\neinem Schauer am Abend kann man sie auch in\nPfützen in den Städten finden.",
		'pt-br': "Normalmente vivem em lagos, mas, após uma chuva\nnoturna, podem aparecer em poças nas cidades.",
		ko: "보통은 연못에서 살고 있지만\n소나기가 온 뒤에는 마을 안의\n물웅덩이에 모습을 드러낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			es: "Ataque Rápido",
			it: "Attacco Rapido",
			de: "Ruckzuckhieb",
			'pt-br': "Ataque Rápido",
			ko: "전광석화"
		},

		damage: "10+",
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
