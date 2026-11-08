import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Up",
				'fr-fr': "Poison Toxique",
				'es-es': "Más Veneno",
				'it-it': "Veleno +",
				'pt-br': "Mais Veneno",
				'de-de': "Giftzulage"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, put 3 more damage counters on that Pokémon between turns. This effect can be applied more than once.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, placez 3 marqueurs de dégâts supplémentaires sur ce dernier entre chaque tour. Vous pouvez appliquer cet effet plusieurs fois.",
				'es-es': "Si el Pokémon Defensor está Envenenado, pon 3 contadores de daño más en ese Pokémon entre turnos. Este efecto se puede aplicar más de una vez.",
				'it-it': "Se il Pokémon difensore è avvelenato, tra un turno e l'altro, metti tre segnalini danno su quel Pokémon. Questo effetto può essere applicato più di una volta.",
				'pt-br': "Se o Pokémon Defensor estiver Envenenado, coloque 3 contadores de danos a mais naquele Pokémon entre as vezes de jogar. Este efeito pode ser aplicado mais de uma vez.",
				'de-de': "Wenn das Verteidigende Pokémon vergiftet ist, lege zwischen den Zügen 3 Schadensmarken auf jenes Pokémon. Dieser Effekt kann mehrmals angewendet werden."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
	},

	thirdParty: {
		cardmarket: 291628,
		tcgplayer: 121188
	}
}

export default card
