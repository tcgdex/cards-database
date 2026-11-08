import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Faded Town",
		'fr-fr': "Ville Abandonnée",
		'es-es': "Pueblo Deslucido",
		'it-it': "Città Deserta",
		'pt-br': "Cidade Desvanecida",
		'de-de': "Verblasstes Dorf"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "N'importe quand entre chaque tour, placez 2 marqueurs de dégâts sur chacun des Pokémon Méga-Évolution.",
		'en-us': "At any time between turns, put 2 damage counters on each Mega Evolution Pokémon.",
		'es-es': "En cualquier momento entre turnos, pon 2 contadores de daño en cada Pokémon Megaevolución.",
		'it-it': "Tra un turno e l'altro, in qualsiasi momento, metti due segnalini danno su ciascun Pokémon Megaevoluzione.",
		'pt-br': "A qualquer momento entre as vezes de jogar, coloque 2 contadores de danos em cada um dos Pokémon Megaevolução.",
		'de-de': "Lege zu einem beliebigen Zeitpunkt zwischen den Zügen 2 Schadensmarken auf jedes Mega-Entwicklungs-Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 284254,
		tcgplayer: 101495
	}
}

export default card
