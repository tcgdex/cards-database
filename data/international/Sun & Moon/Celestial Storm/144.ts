import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Sky Pillar",
		'fr-fr': "Pilier Céleste",
		'es-es': "Pilar Celeste",
		'it-it': "Torre dei Cieli",
		'pt-br': "Pilar Celeste",
		'de-de': "Himmelturm"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés aux Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		'en-us': "Prevent all effects of the opponent’s attacks, including damage, done to Benched Pokémon (both yours and your opponent’s).",
		'es-es': "Evita todos los efectos de los ataques del rival, incluido el daño, infligidos a los Pokémon en Banca (tanto tuyos como de tu rival).",
		'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, inclusi i danni, inflitti ai Pokémon in panchina, sia tuoi che del tuo avversario.",
		'pt-br': "Previne todos os efeitos dos ataques do oponente, incluindo dano, causados aos Pokémon no Banco (seus e do seu oponente).",
		'de-de': "Verhindere alle Effekte von Attacken deines Gegners, einschließlich Schaden, die Pokémon auf der Bank (deiner und der deines Gegners) zugefügt werden."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 361382,
		tcgplayer: 171005
	}
}

export default card
