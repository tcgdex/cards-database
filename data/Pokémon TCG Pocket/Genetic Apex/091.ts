import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bruxish",
		fr: "Denticrisse",
		es: "Bruxish",
		it: "Bruxish",
		de: "Knirfish",
		'pt-br': "Bruxish",
		ko: "치갈기"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Second Strike",
			fr: "Deuxième Coup",
			es: "Segundo Golpe",
			it: "Secondocolpo",
			de: "Sekundärschlag",
			'pt-br': "Segundo Golpe",
			ko: "아픈데때리기"
		},

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
			es: "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 60 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 60 danni in più.",
			de: "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 60 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
		},

		damage: "10+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
		fr: "Ce Pokémon grince fortement des dents afin de\nstimuler son cerveau. Il projette ensuite l'énergie\npsychique ainsi créée par l'appendice sur sa tête.",
		es: "Estimula su cerebro al rechinar los dientes con\nfuerza. Libera el poder psíquico que genera\npor la protuberancia que tiene en la cabeza.",
		it: "Fa stridere i denti per stimolare il proprio\ncervello e creare così onde psichiche, che\npoi emette dalla protuberanza sulla testa.",
		de: "Es knirscht stark mit den Zähnen, um sein Gehirn\nzu stimulieren. Die dabei erzeugten Psycho-Kräfte\nsetzt es über den Fortsatz an seinem Kopf frei.",
		'pt-br': "Range os dentes com muita força para estimular\no seu cérebro. Lança energia psíquica criada durante\neste processo pela protuberância em sua cabeça.",
		ko: "강하게 이를 갈아서 뇌를 자극한다.\n이를 통해 만들어 낸 사이코 파워를\n머리의 돌기를 통해 발사한다."
	}
}

export default card
