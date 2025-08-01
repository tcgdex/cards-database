import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Team Hunt",
				fr: "Chasse en Équipe",
				es: "Caza en Equipo",
				it: "Caccia in Branco",
				pt: "Caçada em Equipe",
				de: "Teamjagd"
			},
			effect: {
				en: "Draw a card for each of your Houndour in play.",
				fr: "Piochez une carte pour chacun de vos Malosse en jeu.",
				es: "Roba 1 carta por cada uno de tus Houndour en juego.",
				it: "Pesca una carta per ciascuno dei tuoi Houndour in gioco.",
				pt: "Compre 1 carta para cada um dos seus Houndour em jogo.",
				de: "Ziehe 1 Karte für jedes deiner Hunduster im Spiel."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				it: "Fiammata",
				pt: "Chama",
				de: "Flackern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365685
	}
}

export default card
