import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Bent Spoon",
		fr: "Cuiller Déformée",
		es: "Cuchara Doblada",
		it: "Cucchiaio Piegato",
		pt: "Colher Torcida",
		de: "Verbogener Löffel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)",
		en: "Prevent all effects of your opponent's attacks, except damage, done to the Pokémon this card is attached to. (Existing effects are not removed.)",
		es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos al Pokémon al que esté unida esta carta. (No se eliminan los efectos ya existentes).",
		it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai Pokémon ai quali è assegnata questa carta. Gli effetti esistenti non vengono rimossi.",
		pt: "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados ao Pokémon ao qual este card está ligado. (Efeitos existentes não são removidos.)",
		de: "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die dem Pokémon, an das diese Karte angelegt ist, zugefügt werden. (Bestehende Effekte werden nicht entfernt.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289913,
		tcgplayer: 117866
	}
}

export default card
