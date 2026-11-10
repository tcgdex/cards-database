import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		de: "Magbrant",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		'es-mx': "Magmortar"
	},

	illustrator: "Taiga Kasai",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buddy Boost",
			fr: "Boost Partenaire",
			de: "Kumpelboost",
			es: "Impulso Amigo",
			it: "Carica Amica",
			pt: "Impulso Camarada",
			'es-mx': "Impulso Amistoso"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Attach a Basic Fire Energy card, a Basic Lightning Energy card, or 1 of each from your hand to your Electivire and Magmortar in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie Fire de base, une carte Énergie Lightning de base, ou une de chaque de votre main à vos Élekable et Maganon comme il vous plaît.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Lege 1 Basis-Fire-Energiekarte, 1 Basis-Lightning-Energiekarte oder von beiden 1 aus deiner Hand beliebig an deine Elevoltek und Magbrant an.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Une 1 carta de Energía Fire Básica, 1 carta de Energía Lightning Básica o 1 de cada una de tu mano a tus Electivire y Magmortar de la manera que desees.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Assegna ai tuoi Electivire e Magmortar una carta Energia base Fire, una carta Energia base Lightning o entrambe dalla tua mano nel modo che preferisci.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Ligue uma carta de Energia Fire Básica, uma carta de Energia Lightning Básica ou 1 de cada da sua mão aos seus Electivire e Magmortar como desejar.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Une 1 carta de Energía Fire Básica, 1 carta de Energía Lightning Básica o 1 de cada una de tu mano a tus Electivire y Magmortar de la manera que quieras."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			de: "Brandstempel",
			es: "Golpe Calor",
			it: "Marchiafuoco",
			pt: "Choque de Calor",
			'es-mx': "Golpe de Calor"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726560,
		cardmarket: 918836
	}
}

export default card