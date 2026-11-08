import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Bent Spoon",
		'fr-fr': "Cuiller Déformée",
		'es-es': "Cuchara Doblada",
		'it-it': "Cucchiaio Piegato",
		'pt-br': "Colher Torcida",
		'de-de': "Verbogener Löffel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)",
		'en-us': "Prevent all effects of your opponent's attacks, except damage, done to the Pokémon this card is attached to. (Existing effects are not removed.)",
		'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos al Pokémon al que esté unida esta carta. (No se eliminan los efectos ya existentes).",
		'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai Pokémon ai quali è assegnata questa carta. Gli effetti esistenti non vengono rimossi.",
		'pt-br': "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados ao Pokémon ao qual este card está ligado. (Efeitos existentes não são removidos.)",
		'de-de': "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die dem Pokémon, an das diese Karte angelegt ist, zugefügt werden. (Bestehende Effekte werden nicht entfernt.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289913,
		tcgplayer: 117866
	}
}

export default card
