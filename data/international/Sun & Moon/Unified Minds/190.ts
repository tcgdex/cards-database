import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Channeler",
		'fr-fr': "Exorciste",
		'es-es': "Exorcista",
		'it-it': "Medium",
		'pt-br': "Exorcista",
		'de-de': "Exorzistin"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Retirez tous les effets d’attaques sur vous et sur chacun de vos Pokémon.",
		'en-us': "Remove all effects of attacks on you and each of your Pokémon.",
		'es-es': "Elimina todos los efectos de los ataques en ti y en cada uno de tus Pokémon.",
		'it-it': "Rimuovi tutti gli effetti degli attacchi che si applicano a te e a ciascuno dei tuoi Pokémon.",
		'pt-br': "Remova todos os efeitos de ataques em você e em cada um dos seus Pokémon.",
		'de-de': "Entferne alle Effekte von Attacken auf dir und jedem deiner Pokémon."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 388737,
		tcgplayer: 195220
	}
}

export default card
