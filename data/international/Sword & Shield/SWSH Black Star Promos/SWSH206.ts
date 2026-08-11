import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [899],
	set: Set,

	name: {
		'fr-fr': "Cerbyllin",
		'de-de': "Damythir",
		'es-es': "Wyrdeer",
		'pt-br': "Wyrdeer",
		'it-it': "Wyrdeer",
		'en-us': "Wyrdeer"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Cerfrousse",
		'de-de': "Damhirplex",
		'es-es': "Stantler",
		'pt-br': "Stantler",
		'it-it': "Stantler",
		'en-us': "Stantler"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Allure Pressée",
			'de-de': "Eiliger Gang",
			'es-es': "Marcha Apresurada",
			'pt-br': "Marcha Apressada",
			'it-it': "Andatura Frettolosa",
			'en-us': "Hurried Gait"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher une carte.",
			'de-de': "Einmal während deines Zuges kannst du 1 Karte ziehen.",
			'es-es': "Una vez durante tu turno, puedes robar 1 carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare una carta.",
			'en-us': "Once during your turn, you may draw a card."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Extrasenseur",
			'de-de': "Sondersensor",
			'es-es': "Paranormal",
			'pt-br': "Extrassensorial",
			'it-it': "Extrasenso",
			'en-us': "Extrasensory"
		},

		effect: {
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing."
	},

	thirdParty: {
		cardmarket: 611337
	}
}

export default card
