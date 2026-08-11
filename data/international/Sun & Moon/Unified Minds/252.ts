import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Karate Belt",
		'fr-fr': "Ceinture de Karaté",
		'es-es': "Cinturón Negro",
		'it-it': "Cintura da Karate",
		'pt-br': "Faixa de Caratê",
		'de-de': "Karategürtel"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "If you have more Prize cards remaining than your opponent, the attacks of the Pokémon this card is attached to cost Fighting less.",
		'fr-fr': "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Fighting de moins.",
		'es-es': "Si te quedan más cartas de Premio que a tu rival, los ataques del Pokémon al que esté unida esta carta cuestan Fighting menos.",
		'it-it': "Se hai più carte Premio rimanenti del tuo avversario, gli attacchi del Pokémon a cui è assegnata questa carta costano Fighting in meno.",
		'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques do Pokémon ao qual esta carta está ligada custarão Fighting a menos.",
		'de-de': "Wenn du mehr verbleibende Preiskarten als dein Gegner hast, verringern sich die Kosten der Attacken des Pokémon, an das diese Karte angelegt ist, um Fighting."
	},

	thirdParty: {
		cardmarket: 389052,
		tcgplayer: 195316
	}
}

export default card
