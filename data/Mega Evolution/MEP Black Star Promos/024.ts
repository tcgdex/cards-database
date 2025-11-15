import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio ex",
		fr: "Plumeline-ex",
		de: "Choreogel-ex",
		it: "Oricorio-ex",
		es: "Oricorio ex",
		pt: "Oricorio ex"
	},

	illustrator: "Shinji Kanda",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	dexId: [741],

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Turbo",
			fr: "Turbo Dynamique",
			de: "Begeisterter Turbo",
			it: "Fervorturbo",
			es: "Impulso Turbo",
			pt: "Turbo Animado"
		},

		effect: {
			en: "As often as you like during your turn, if you have any {R} Mega Evolution Pokémon ex in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to 1 of your Benched {R} Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, si vous avez au moins un Pokémon-ex Méga-Évolution {R} en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base de votre main à l'un de vos Pokémon {R} de Banc.",
			de: "Beliebig oft während deines Zuges, wenn du mindestens 1 {R}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{R}-Energiekarte aus deiner Hand an 1 {R}-Pokémon auf deiner Bank an.",
			it: "Durante il tuo turno, se hai dei Pokémon-ex Megaevoluzione {R} in gioco, puoi usare questa abilità tutte le volte che vuoi. Assegna a uno dei Pokémon {R} nella tua panchina una carta Energia base {R} dalla tua mano.",
			es: "Todas las veces que quieras durante tu turno, si tienes algún Pokémon ex Megaevolución {R} en juego, puedes usar esta habilidad. Une 1 carta de Energía {R} Básica de tu mano a uno de tus Pokémon {R} en Banca.",
			pt: "Quantas vezes desejar durante o seu turno, se você tiver algum Pokémon ex de Megaevolução {R} em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {R} Básica da sua mão a 1 dos seus Pokémon {R} no Banco."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			de: "Feuerflügel",
			it: "Alafiamma",
			es: "Ala Ígnea",
			pt: "Asa de Fogo"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
