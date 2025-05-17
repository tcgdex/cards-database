import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Barrier Attack",
			fr: "Attaque d'Obstacle",
			es: "Ataque Barrera",
			it: "Attacco Barriera",
			de: "Angriffsbarriere",
			'pt-br': "Ataque Barreira",
			ko: "배리어어택"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
		fr: "De nombreux savants pensent que ses mains\nse sont développées pour faire de la pantomime.",
		es: "Muchos estudiosos sostienen que el\ndesarrollo de sus enormes manos se debe\na su afán por practicar la pantomima.",
		it: "Molti studiosi ritengono che abbia sviluppato mani\ncosì grandi perché gli sono utili per la mimica.",
		de: "Viele Forscher glauben, seine Hände hätten nur\ndeshalb so eine beachtliche Größe angenommen,\ndamit es Pantomime praktizieren kann.",
		'pt-br': "Suas mãos talvez não sejam grandes\npor acaso: muitos cientistas acreditam que\nas palmas se alargaram para fazer mímica.",
		ko: "커다란 손바닥은 팬터마임을\n하기 위해 발달했다고\n생각하는 학자도 많다."
	}
}

export default card
