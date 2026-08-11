import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Stealthy Hood",
		'fr-fr': "Capuche Furtive",
		'es-es': "Capucha Clandestina",
		'it-it': "Cappuccio Furtivo",
		'pt-br': "Capuz Furtivo",
		'de-de': "Tarnkappe"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les effets des talents de votre adversaire infligés au Pokémon auquel cette carte est attachée. Retirez tous les effets déjà en action.",
		'en-us': "Prevent all effects of your opponent’s Abilities done to the Pokémon this card is attached to. Remove any such existing effects.",
		'es-es': "Evita todos los efectos de las habilidades de tu rival infligidos al Pokémon al que esté unida esta carta. Elimina los efectos ya existentes.",
		'it-it': "Previeni tutti gli effetti delle abilità del tuo avversario inflitti al Pokémon a cui è assegnata questa carta. Rimuovi anche tutti gli effetti esistenti dello stesso genere.",
		'pt-br': "Previne todos os efeitos das Habilidades do seu oponente causados ao Pokémon ao qual esta carta está ligada. Remova todos os efeitos existentes destas Habilidades.",
		'de-de': "Verhindere alle Effekte der Fähigkeiten deines Gegners, die dem Pokémon, an das diese Karte angelegt ist, zugefügt werden. Entferne alle solche bestehenden Effekte."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 372470,
		tcgplayer: 189295
	}
}

export default card
