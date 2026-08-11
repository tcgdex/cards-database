import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'es-es': "Omastar",
		'it-it': "Omastar",
		'de-de': "Amoroso",
		'pt-br': "Omastar",
		'ko-kr': "암스타"
	},

	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [139],
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Omanyte"
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Ancient Whirlpool",
			'fr-fr': "Siphon Antique",
			'es-es': "Torbellino Ancestral",
			'it-it': "Gorgo Antico",
			'de-de': "Urzeitsog",
			'pt-br': "Redemoinho Ancestral",
			'ko-kr': "고대의 바다회오리"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬은 기술을 사용할 수 없다."
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "Weighed down by a large and heavy shell, Omastar couldn't move very fast. Some say it went extinct because it was unable to catch food.",
		'fr-fr': "Il se serait éteint à cause de la taille et du poids\nimportants de sa coquille, qui le ralentissait\nquand il chassait ses proies.",
		'es-es': "Se cree que se extinguió porque el excesivo\ntamaño y peso de su concha le impedían\nmoverse con rapidez para capturar presas.",
		'it-it': "Si dice si sia estinto per via della conchiglia\ngrossa e pesante che, rendendo i suoi movimenti\nimpacciati, gli impediva di catturare le prede.",
		'de-de': "Es starb wohl aus, weil seine Bewegungen durch\ndas große, schwere Gehäuse so langsam wurden,\ndass es keine Beute mehr fangen konnte.",
		'pt-br': "Por conta de seu grande casco, Omastar é\npesado e não se move rápido. Dizem que entrou\nem extinção porque era incapaz de conseguir comida.",
		'ko-kr': "크고 무거운 껍질 때문에\n움직임이 둔해져서\n먹이를 잡지 못해 멸종했다고 한다."
	},

	boosters: ["pikachu"]
}

export default card
