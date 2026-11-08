import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Silver Mirror",
		'fr-fr': "Miroir d’Argent",
		'es-es': "Espejo Plateado",
		'it-it': "Specchiargento",
		'pt-br': "Espelho de Prata",
		'de-de': "Silberspiegel"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les effets d’attaques (y compris les dégâts) infligés au Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) par les Pokémon de la Team Plasma de votre adversaire.",
		'en-us': "Prevent all effects of attacks, including damage, done to the Pokémon this card is attached to (excluding Pokémon-EX) by your opponent’s Team Plasma Pokémon.",
		'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos al Pokémon al que esté unida esta carta (excluidos los Pokémon-EX) por los Pokémon del Equipo Plasma de tu rival.",
		'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti al Pokémon a cui è assegnata questa carta (esclusi i Pokémon-EX) dai Pokémon del Team Plasma del tuo avversario.",
		'pt-br': "Impede todos os efeitos de ataque, incluindo danos, causados ao Pokémon ao qual este card está ligado (exceto Pokémon-EX) e realizados pelo Pokémon da Equipe Plasma do oponente.",
		'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die dem Pokémon, an das diese Karte angelegt ist (außer Pokémon-EX), durch Team Plasma-Pokémon deines Gegners zugefügt werden."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281110,
		tcgplayer: 89216
	}
}

export default card
