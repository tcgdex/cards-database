import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Steel Shelter",
		'fr-fr': "Bunker d'Acier",
		'es-es': "Refugio de Acero",
		'it-it': "Rifugio Acciaio",
		'pt-br': "Abrigo de Aço",
		'de-de': "Stahlbunker"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque Pokémon Metal (les vôtres et ceux de votre adversaire) ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
		'en-us': "Each Metal Pokémon (both yours and your opponent's) can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
		'es-es': "Los Pokémon Metal (tanto tuyos como de tu rival) no se pueden ver afectados por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon).",
		'it-it': "Nessun Pokémon Metal, sia tuo che del tuo avversario, può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tale Pokémon).",
		'pt-br': "Nenhum Pokémon Metal (seus e do seu oponente) poderá ser afetado por Condições Especiais. (Remova todas as Condições Especiais que afetam esses Pokémon.)",
		'de-de': "Kein Metal-Pokémon (deine und die deines Gegners) kann von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesen Pokémon verlieren ihre Wirkung.)"
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281912,
		tcgplayer: 94673
	}
}

export default card
