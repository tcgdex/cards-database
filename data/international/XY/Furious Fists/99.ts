import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Sparkling Robe",
		'fr-fr': "Peignoir Scintillant",
		'es-es': "Albornoz Destellante",
		'it-it': "Accappatoio Scintillante",
		'pt-br': "Veste Cintilante",
		'de-de': "Glänzender Mantel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon auquel cette carte est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant le Pokémon concerné.)",
		'en-us': "The Pokémon this card is attached to can't be affected by any Special Conditions. (Remove any Special Conditions affecting that Pokémon.)",
		'es-es': "El Pokémon que tenga esta carta unida a él no se puede ver afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a ese Pokémon).",
		'it-it': "Il Pokémon a cui è assegnata questa carta non può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tale Pokémon).",
		'pt-br': "O Pokémon ao qual este card está ligado não poderá ser afetado por nenhuma Condição Especial. (Remova todas as Condições Especiais que afetam esse Pokémon.)",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281763,
		tcgplayer: 92282
	}
}

export default card
