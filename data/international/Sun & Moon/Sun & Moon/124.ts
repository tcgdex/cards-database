import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Poison Barb",
		'fr-fr': "Pic Venin",
		'es-es': "Flecha Venenosa",
		'it-it': "Velenaculeo",
		'pt-br': "Farpa Venenosa",
		'de-de': "Giftstich"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		'en-us': "If the Pokémon this card is attached to is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
		'es-es': "Si el Pokémon al que está unida esta carta es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada for o seu Pokémon Ativo e ele for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante será Envenenado.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 295437,
		tcgplayer: 126996
	}
}

export default card
