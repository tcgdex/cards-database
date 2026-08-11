import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Exp. Share",
		'fr-fr': "Multi Exp",
		'es-es': "Repartir Experiencia",
		'it-it': "Condividi Esperienza",
		'pt-br': "Compart. Exp.",
		'de-de': "EP-Teiler"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer 1 carte d’Énergie de base de ce Pokémon vers le Pokémon auquel cette carte est attachée.",
		'en-us': "When your Active Pokémon is Knocked Out by damage from an opponent’s attack, you may move 1 basic Energy card from that Pokémon to the Pokémon this card is attached to.",
		'es-es': "Cuando tu Pokémon Activo queda Fuera de Combate por el daño de un ataque de tu rival, puedes mover 1 carta de Energía Básica de ese Pokémon al Pokémon al que esté unida esta carta.",
		'it-it': "Quando il tuo Pokémon attivo viene messo KO dai danni inflitti da un attacco del tuo avversario, puoi spostare una carta Energia base che gli era stata assegnata sul Pokémon a cui è assegnata questa carta.",
		'pt-br': "Quando o seu Pokémon Ativo é Nocauteado pelo dano de um ataque do seu oponente, você pode mover 1 carta de Energia básica daquele Pokémon para o Pokémon ao qual esta carta está ligada.",
		'de-de': "Wenn dein Aktives Pokémon durch den Schaden einer Attacke deines Gegners kampfunfähig wird, kannst du 1 an jenes Pokémon angelegte Basis-Energiekarte auf das Pokémon verschieben, an das diese Karte angelegt ist."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 295431,
		tcgplayer: 126990
	}
}

export default card
