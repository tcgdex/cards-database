import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Ear-Ringing Bell",
		'fr-fr': "Cloche Sonnante",
		'es-es': "Campana Ensordecedora",
		'it-it': "Campana Assordante",
		'pt-br': "Sino Ensurdecedor",
		'de-de': "Ohrenbetäubende Glocke"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
		'en-us': "If the Pokémon this card is attached to is your Active Pokémon and is damaged by an opponent’s attack (even if that Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
		'es-es': "Si el Pokémon al que está unida esta carta es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Confundido.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene confuso.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada for o seu Pokémon Ativo e ele for danificado por um ataque do seu oponente (mesmo que aquele Pokémon seja Nocauteado), o Pokémon Atacante será Confundido.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verwirrt."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 388752,
		tcgplayer: 195231
	}
}

export default card
