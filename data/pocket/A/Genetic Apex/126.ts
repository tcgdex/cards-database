import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'de-de': "Pantimos",
		'pt-br': "Mr. Mime",
		'ko-kr': "마임맨"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [122],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Barrier Attack",
			'fr-fr': "Attaque d'Obstacle",
			'es-es': "Ataque Barrera",
			'it-it': "Attacco Barriera",
			'de-de': "Angriffsbarriere",
			'pt-br': "Ataque Barreira",
			'ko-kr': "배리어어택"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
			'ko-kr': "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
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
		'en-us': "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
		'fr-fr': "De nombreux savants pensent que ses mains\nse sont développées pour faire de la pantomime.",
		'es-es': "Muchos estudiosos sostienen que el\ndesarrollo de sus enormes manos se debe\na su afán por practicar la pantomima.",
		'it-it': "Molti studiosi ritengono che abbia sviluppato mani\ncosì grandi perché gli sono utili per la mimica.",
		'de-de': "Viele Forscher glauben, seine Hände hätten nur\ndeshalb so eine beachtliche Größe angenommen,\ndamit es Pantomime praktizieren kann.",
		'pt-br': "Suas mãos talvez não sejam grandes\npor acaso: muitos cientistas acreditam que\nas palmas se alargaram para fazer mímica.",
		'ko-kr': "커다란 손바닥은 팬터마임을\n하기 위해 발달했다고\n생각하는 학자도 많다."
	},

	boosters: ["mewtwo"]
}

export default card
