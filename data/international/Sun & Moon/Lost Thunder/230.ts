import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Counter Gain",
		'fr-fr': "Rattrape-Riposte",
		'es-es': "Alcance Contraataque",
		'it-it': "Contrappeso",
		'pt-br': "Contra-ataque de Alcance",
		'de-de': "Kontergewinn"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "S’il vous reste plus de cartes Récompense que votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Colorless de moins.",
		'en-us': "If you have more Prize cards remaining than your opponent, the attacks of the Pokémon this card is attached to cost Colorless less.",
		'es-es': "Si te quedan más cartas de Premio que a tu rival, los ataques del Pokémon al que esté unida esta carta cuestan Colorless menos.",
		'it-it': "Se hai più carte Premio rimanenti del tuo avversario, gli attacchi del Pokémon a cui è assegnata questa carta costano Colorless in meno.",
		'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, os ataques do Pokémon ao qual esta carta está ligada custarão Colorless a menos.",
		'de-de': "Wenn du mehr verbleibende Preiskarten als dein Gegner hast, verringern sich die Kosten der Attacken des Pokémon, an das diese Karte angelegt ist, um Colorless."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 365863,
		tcgplayer: 178996
	}
}

export default card
