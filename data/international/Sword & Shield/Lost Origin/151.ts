import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spill Out",
			'fr-fr': "Déversement",
			'es-es': "Desparramar",
			'it-it': "Spargimento",
			'pt-br': "Derrubando Tudo",
			'de-de': "Herauskullern"
		},

		effect: {
			'en-us': "Discard your hand. If you discarded 5 or more cards in this way, this attack does 150 more damage.",
			'fr-fr': "Défaussez votre main. Si vous avez défaussé 5 cartes ou plus de cette façon, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Descarta las cartas de tu mano. Si has descartado 5 cartas o más de esta manera, este ataque hace 150 puntos de daño más.",
			'it-it': "Scarta le carte che hai in mano. Se hai scartato cinque o più carte in questo modo, questo attacco infligge 150 danni in più.",
			'pt-br': "Descarte a sua mão. Se você descartou 5 ou mais cartas desta forma, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Lege deine Handkarten auf deinen Ablagestapel. Wenn du auf diese Weise 5 oder mehr Karten auf deinen Ablagestapel gelegt hast, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674160,
				tcgplayer: 284079
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674160,
				tcgplayer: 284079
			}
		},
	],
}

export default card
