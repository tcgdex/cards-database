import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oricorio ex",
		'fr-fr': "Plumeline-ex",
		'es-es': "Oricorio ex",
		'es-mx': "Oricorio ex",
		'de-de': "Choreogel-ex",
		'it-it': "Oricorio-ex",
		'pt-br': "Oricorio ex"
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [741],
	hp: 190,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Turbo",
			'fr-fr': "Turbo Dynamique",
			'es-es': "Impulso Turbo",
			'es-mx': "Turbo Vibrante",
			'de-de': "Begeisterter Turbo",
			'it-it': "Fervorturbo",
			'pt-br': "Turbo Animado"
		},

		effect: {
			'en-us': "As often as you like during your turn, if you have any {R} Mega Evolution Pokémon ex in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to 1 of your Benched {R} Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, si vous avez au moins un Pokémon-ex Méga-Évolution {R} en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base de votre main à l'un de vos Pokémon {R} de Banc.",
			'es-es': "Todas las veces que quieras durante tu turno, si tienes algún Pokémon ex Megaevolución {R} en juego, puedes usar esta habilidad. Une 1 carta de Energía {R} Básica de tu mano a uno de tus Pokémon {R} en Banca.",
			'es-mx': "Cuantas veces quieras durante tu turno, si tienes algún Pokémon ex Megaevolución {R} en juego, puedes usar esta Habilidad. Une 1 carta de Energía {R} Básica de tu mano a 1 de tus Pokémon {R} en Banca.",
			'de-de': "Beliebig oft während deines Zuges, wenn du mindestens 1 {R}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{R}-Energiekarte aus deiner Hand an 1 {R}-Pokémon auf deiner Bank an.",
			'it-it': "Durante il tuo turno, se hai dei Pokémon-ex Megaevoluzione {R} in gioco, puoi usare questa abilità tutte le volte che vuoi. Assegna a uno dei Pokémon {R} nella tua panchina una carta Energia base {R} dalla tua mano.",
			'pt-br': "Quantas vezes desejar durante o seu turno, se você tiver algum Pokémon ex de Megaevolução {R} em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {R} Básica da sua mão a 1 dos seus Pokémon {R} no Banco."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'es-es': "Ala Ígnea",
			'es-mx': "Ala Ígnea",
			'de-de': "Feuerflügel",
			'it-it': "Alafiamma",
			'pt-br': "Asa de Fogo"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	illustrator: "akagi",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857593,
				tcgplayer: 662206,
				cardtrader: 356801
			}
		},
	],
}

export default card
