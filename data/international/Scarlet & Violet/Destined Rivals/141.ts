import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'de-de': "Panzaeron",
		'it-it': "Skarmory",
		'es-es': "Skarmory",
		'pt-br': "Skarmory",
		'es-mx': "Skarmory"
	},


	illustrator: "Shin Nagasawa",

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Roost",
			'fr-fr': "Atterrissage",
			'de-de': "Ruheort",
			'it-it': "Trespolo",
			'es-es': "Respiro",
			'pt-br': "Poleiro",
			'es-mx': "Respiro"
		},

		effect: {
			'en-us': "Heal 50 damage from this Pokémon. During your next turn, this Pokémon can't retreat.",
			'fr-fr': "Soignez 50 dégâts de ce Pokémon. Pendant votre prochain tour, ce Pokémon ne peut pas battre en retraite.",
			'de-de': "Heile 50 Schadenspunkte bei diesem Pokémon. Während deines nächsten Zuges kann sich dieses Pokémon nicht zurückziehen.",
			'it-it': "Cura questo Pokémon da 50 danni. Durante il tuo prossimo turno, questo Pokémon non può ritirarsi.",
			'es-es': "Cura 50 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse.",
			'pt-br': "Cure 50 pontos de dano deste Pokémon. Durante o seu próximo turno, este Pokémon não poderá recuar.",
			'es-mx': "Cura 50 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'de-de': "Metallklaue",
			'it-it': "Ferrartigli",
			'es-es': "Garra Metal",
			'pt-br': "Garra de Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826015,
				tcgplayer: 632948
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826015,
				tcgplayer: 632948
			}
		},
	],
}

export default card
