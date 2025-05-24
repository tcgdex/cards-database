import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Cerbyllin",
		de: "Damythir",
		es: "Wyrdeer",
		pt: "Wyrdeer",
		it: "Wyrdeer",
		en: "Wyrdeer"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Cerfrousse",
		de: "Damhirplex",
		es: "Stantler",
		pt: "Stantler",
		it: "Stantler",
		en: "Stantler"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Allure Pressée",
			de: "Eiliger Gang",
			es: "Marcha Apresurada",
			pt: "Marcha Apressada",
			it: "Andatura Frettolosa",
			en: "Hurried Gait"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez piocher une carte.",
			de: "Einmal während deines Zuges kannst du 1 Karte ziehen.",
			es: "Una vez durante tu turno, puedes robar 1 carta.",
			pt: "Uma vez durante o seu turno, você poderá comprar 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi pescare una carta.",
			en: "Once during your turn, you may draw a card."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Extrasenseur",
			de: "Sondersensor",
			es: "Paranormal",
			pt: "Extrassensorial",
			it: "Extrasenso",
			en: "Extrasensory"
		},

		effect: {
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing."
	}
}

export default card