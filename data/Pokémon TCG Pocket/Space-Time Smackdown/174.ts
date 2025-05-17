import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		it: "Heatran",
		de: "Heatran",
		'pt-br': "Heatran",
		ko: "히드런"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		en: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
		fr: "Il hante les grottes volcaniques. Il rampe au mur\net au plafond grâce à ses pieds en forme de croix.",
		es: "Habita cuevas volcánicas. Cava con sus pies en\nforma de cruz para trepar por techos y paredes.",
		it: "Vive nelle cavità dei vulcani. Scava con i suoi piedi\na croce per scalare pareti e arrampicarsi sui soffitti.",
		de: "Es lebt in vulkanischen Höhlen. Mit seinen kreuzförmigen\nKlauen kann es sogar an der Decke laufen.",
		'pt-br': "Ele habita crateras vulcânicas. Ele escava com seus pés\nem forma de cruz para rastejar em telhados e paredes.",
		ko: "화산의 동굴에서 서식한다.\n십자형의 발톱을 박아서\n벽이나 천장을 돌아다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Steel Tackle",
			fr: "Charge d'Acier",
			es: "Placaje de Acero",
			it: "Ferrazione",
			de: "Stahltackle",
			'pt-br': "Colisão de Aço",
			ko: "강철태클"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Metal"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["dialga"]
}

export default card
