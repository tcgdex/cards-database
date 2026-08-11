import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Mountain Ring",
		'fr-fr': "Ring en Montagne",
		'es-es': "Cuadrilátero de Montaña",
		'it-it': "Ring Montano",
		'pt-br': "Anel de Montanhas",
		'de-de': "Gebirgsring"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les dégâts infligés à des Pokémon de Banc par des attaques (les vôtres et ceux de votre adversaire).",
		'en-us': "Prevent all damage done to Benched Pokémon by attacks (both yours and your opponent's).",
		'es-es': "Evita todo el daño infligido a los Pokémon en Banca por ataques (tanto tuyos como de tu rival).",
		'it-it': "Previeni tutti i danni da attacchi inflitti ai Pokémon in panchina, sia tuoi che del tuo avversario.",
		'pt-br': "Previne todos os danos causados a Pokémon no Banco por ataques (seus e do seu oponente).",
		'de-de': "Verhindere allen Schaden, der Pokémon auf der Bank durch Angriffe zugefügt würde (deinen und denen deines Gegners)."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281761,
		tcgplayer: 92280
	}
}

export default card
