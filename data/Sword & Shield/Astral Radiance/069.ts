import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [899],
	set: Set,

	name: {
		en: "Wyrdeer",
		fr: "Cerbyllin",
		es: "Wyrdeer",
		it: "Wyrdeer",
		pt: "Wyrdeer",
		de: "Damythir"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Stantler",
		fr: "Cerfrousse",
		es: "Stantler",
		it: "Stantler",
		pt: "Stantler",
		de: "Damhirplex"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hurried Gait",
			fr: "Allure Pressée",
			es: "Marcha Apresurada",
			it: "Andatura Frettolosa",
			pt: "Marcha Apressada",
			de: "Eiliger Gang"
		},

		effect: {
			en: "Once during your turn, you may draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez piocher une carte.",
			es: "Una vez durante tu turno, puedes robar 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi pescare una carta.",
			pt: "Uma vez durante o seu turno, você poderá comprar 1 carta.",
			de: "Einmal während deines Zuges kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
			es: "Paranormal",
			it: "Extrasenso",
			pt: "Extrassensorial",
			de: "Sondersensor"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
