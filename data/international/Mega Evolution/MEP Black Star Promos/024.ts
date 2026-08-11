import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oricorio ex",
		'fr-fr': "Plumeline-ex",
		'de-de': "Choreogel-ex",
		'it-it': "Oricorio-ex",
		'es-es': "Oricorio ex",
		'pt-br': "Oricorio ex"
	},

	suffix: "ex",
	illustrator: "Shinji Kanda",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	dexId: [741],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Turbo",
			'fr-fr': "Turbo Dynamique",
			'de-de': "Begeisterter Turbo",
			'it-it': "Fervorturbo",
			'es-es': "Impulso Turbo",
			'pt-br': "Turbo Animado"
		},

		effect: {
			'en-us': "As often as you like during your turn, if you have any {R} Mega Evolution Pokémon ex in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to 1 of your Benched {R} Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, si vous avez au moins un Pokémon-ex Méga-Évolution {R} en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base de votre main à l'un de vos Pokémon {R} de Banc.",
			'de-de': "Beliebig oft während deines Zuges, wenn du mindestens 1 {R}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{R}-Energiekarte aus deiner Hand an 1 {R}-Pokémon auf deiner Bank an.",
			'it-it': "Durante il tuo turno, se hai dei Pokémon-ex Megaevoluzione {R} in gioco, puoi usare questa abilità tutte le volte che vuoi. Assegna a uno dei Pokémon {R} nella tua panchina una carta Energia base {R} dalla tua mano.",
			'es-es': "Todas las veces que quieras durante tu turno, si tienes algún Pokémon ex Megaevolución {R} en juego, puedes usar esta habilidad. Une 1 carta de Energía {R} Básica de tu mano a uno de tus Pokémon {R} en Banca.",
			'pt-br': "Quantas vezes desejar durante o seu turno, se você tiver algum Pokémon ex de Megaevolução {R} em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {R} Básica da sua mão a 1 dos seus Pokémon {R} no Banco."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'de-de': "Feuerflügel",
			'it-it': "Alafiamma",
			'es-es': "Ala Ígnea",
			'pt-br': "Asa de Fogo"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 859036,
				tcgplayer: 664010
			}
		},
	],
}

export default card
