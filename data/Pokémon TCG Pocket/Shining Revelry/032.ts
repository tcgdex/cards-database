import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		de: "Pantimos",
		'pt-br': "Mr. Mime",
		ko: "마임맨"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [122],
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
		fr: "De nombreux savants pensent que ses mains\nse sont développées pour faire de la pantomime.",
		es: "Muchos estudiosos sostienen que el\ndesarrollo de sus enormes manos se debe\na su afán por practicar la pantomima.",
		it: "Molti studiosi ritengono che abbia sviluppato mani\ncosì grandi perché gli sono utili per la mimica.",
		de: "Viele Forscher glauben, seine Hände hätten nur\ndeshalb so eine beachtliche Größe angenommen,\ndamit es Pantomime praktizieren kann.",
		'pt-br': "Suas mãos talvez não sejam grandes\npor acaso: muitos cientistas acreditam que\nas palmas se alargaram para fazer mímica.",
		ko: "커다란 손바닥은 팬터마임을\n하기 위해 발달했다고\n생각하는 학자도 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Juggling",
			fr: "Jonglerie",
			es: "Malabarismo",
			it: "Giocoleria",
			de: "Jongleur",
			'pt-br': "Malabarismo",
			ko: "저글링"
		},

		damage: "20x",
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Flip 4 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia 4 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			ko: "동전을 4번 던져서 앞면이 나온 수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card