import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omastar",
		fr: "Amonistar",
		es: "Omastar",
		it: "Omastar",
		de: "Amoroso",
		'pt-br': "Omastar",
		ko: "암스타"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
		es: "Omanyte",
		it: "Omanyte",
		pt: "Omanyte",
		de: "Amonitas"
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Ancient Whirlpool",
			fr: "Siphon Antique",
			es: "Torbellino Ancestral",
			it: "Gorgo Antico",
			de: "Urzeitsog",
			'pt-br': "Redemoinho Ancestral",
			ko: "고대의 바다회오리"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 기술을 사용할 수 없다."
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
		en: "Weighed down by a large and heavy shell, Omastar couldn't move very fast. Some say it went extinct because it was unable to catch food.",
		fr: "Il se serait éteint à cause de la taille et du poids\nimportants de sa coquille, qui le ralentissait\nquand il chassait ses proies.",
		es: "Se cree que se extinguió porque el excesivo\ntamaño y peso de su concha le impedían\nmoverse con rapidez para capturar presas.",
		it: "Si dice si sia estinto per via della conchiglia\ngrossa e pesante che, rendendo i suoi movimenti\nimpacciati, gli impediva di catturare le prede.",
		de: "Es starb wohl aus, weil seine Bewegungen durch\ndas große, schwere Gehäuse so langsam wurden,\ndass es keine Beute mehr fangen konnte.",
		'pt-br': "Por conta de seu grande casco, Omastar é\npesado e não se move rápido. Dizem que entrou\nem extinção porque era incapaz de conseguir comida.",
		ko: "크고 무거운 껍질 때문에\n움직임이 둔해져서\n먹이를 잡지 못해 멸종했다고 한다."
	},

	boosters: ["pikachu"]
}

export default card
