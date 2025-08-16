import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [500],
	set: Set,

	name: {
		en: "Emboar",
		fr: "Roitiflam",
		de: "Flambirex",
		it: "Emboar",
		pt: "Emboar",
		es: "Emboar",
		'es-mx': "Emboar"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Inferno Fandango",
			fr: "Tango Infernal",
			de: "Tango Inferno",
			it: "Fandango Infernale",
			pt: "Inferno Fandango",
			es: "Infierno Fandango",
			'es-mx': "Fandango Infernal"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic {R} Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {R} de base de votre main à l'un de vos Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-{R}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {R} dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {R} Básica da sua mão a 1 dos seus Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {R} Básica de tu mano a uno de tus Pokémon.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes unir 1 carta de Energía {R} Básica de tu mano a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			de: "Brandstempel",
			it: "Marchiafuoco",
			pt: "Choque de Calor",
			es: "Golpe Calor",
			'es-mx': "Golpe de Calor"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835925
	}
}

export default card