import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		'en-us': "Frosmoth",
		'fr-fr': "Beldeneige",
		'es-es': "Frosmoth",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth",
		'de-de': "Mottineva"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Freezing Chill",
			'fr-fr': "Frisson Glaçant",
			'es-es': "Frío Helador",
			'it-it': "Freddo Glaciale",
			'pt-br': "Frio de Arrepiar",
			'de-de': "Gefrierschock"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760676,
				tcgplayer: 542790
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760676,
				tcgplayer: 542790
			}
		},
	],

	illustrator: "rika",

}

export default card