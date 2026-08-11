import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [899],
	set: Set,

	name: {
		'en-us': "Wyrdeer",
		'fr-fr': "Cerbyllin",
		'es-es': "Wyrdeer",
		'it-it': "Wyrdeer",
		'pt-br': "Wyrdeer",
		'de-de': "Damythir"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'es-es': "Stantler",
		'it-it': "Stantler",
		'pt-br': "Stantler",
		'de-de': "Damhirplex"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hurried Gait",
			'fr-fr': "Allure Pressée",
			'es-es': "Marcha Apresurada",
			'it-it': "Andatura Frettolosa",
			'pt-br': "Marcha Apressada",
			'de-de': "Eiliger Gang"
		},

		effect: {
			'en-us': "Once during your turn, you may draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher une carte.",
			'es-es': "Una vez durante tu turno, puedes robar 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare una carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar 1 carta.",
			'de-de': "Einmal während deines Zuges kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Extrasensory",
			'fr-fr': "Extrasenseur",
			'es-es': "Paranormal",
			'it-it': "Extrasenso",
			'pt-br': "Extrassensorial",
			'de-de': "Sondersensor"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
		'en-us': "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658883,
				tcgplayer: 272477
			}
		},
	],
}

export default card
