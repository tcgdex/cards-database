import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [287],
	set: Set,

	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Take It Easy",
			'fr-fr': "Relax",
			'es-es': "Tranqui",
			'it-it': "Prenditela Comoda",
			'pt-br': "De Boaça",
			'de-de': "Eile mit Weile"
		},

		effect: {
			'en-us': "Heal 60 damage from this Pokémon. During your next turn, this Pokémon can't retreat.",
			'fr-fr': "Soignez 60 dégâts de ce Pokémon. Pendant votre prochain tour, ce Pokémon ne peut pas battre en retraite.",
			'es-es': "Cura 60 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse.",
			'it-it': "Cura questo Pokémon da 60 danni. Durante il tuo prossimo turno, questo Pokémon non può ritirarsi.",
			'pt-br': "Cure 60 pontos de dano deste Pokémon. Durante o seu próximo turno, este Pokémon não poderá recuar.",
			'de-de': "Heile 60 Schadenspunkte bei diesem Pokémon. Während deines nächsten Zuges kann sich dieses Pokémon nicht zurückziehen."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794518,
				tcgplayer: 590056
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794518,
				tcgplayer: 590056
			}
		},
	],

	illustrator: "Aya Kusube",

}

export default card
