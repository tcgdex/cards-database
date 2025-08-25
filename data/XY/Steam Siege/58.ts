import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
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
				en: "Poison Up",
				fr: "Poison Toxique",
				es: "Más Veneno",
				it: "Veleno +",
				pt: "Mais Veneno",
				de: "Giftzulage"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, put 3 more damage counters on that Pokémon between turns. This effect can be applied more than once.",
				fr: "Si le Pokémon Défenseur est Empoisonné, placez 3 marqueurs de dégâts supplémentaires sur ce dernier entre chaque tour. Vous pouvez appliquer cet effet plusieurs fois.",
				es: "Si el Pokémon Defensor está Envenenado, pon 3 contadores de daño más en ese Pokémon entre turnos. Este efecto se puede aplicar más de una vez.",
				it: "Se il Pokémon difensore è avvelenato, tra un turno e l'altro, metti tre segnalini danno su quel Pokémon. Questo effetto può essere applicato più di una volta.",
				pt: "Se o Pokémon Defensor estiver Envenenado, coloque 3 contadores de danos a mais naquele Pokémon entre as vezes de jogar. Este efeito pode ser aplicado mais de uma vez.",
				de: "Wenn das Verteidigende Pokémon vergiftet ist, lege zwischen den Zügen 3 Schadensmarken auf jenes Pokémon. Dieser Effekt kann mehrmals angewendet werden."
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

	thirdParty: {
		cardmarket: 291628,
		tcgplayer: 121188
	}
}

export default card
