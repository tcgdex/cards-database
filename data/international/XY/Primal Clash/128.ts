import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Exp. Share",
		'fr-fr': "Multi Exp",
		'es-es': "Repartir Experiencia",
		'it-it': "Condividi Esperienza",
		'pt-br': "Compart. Exp.",
		'de-de': "EPTeiler"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer une carte Énergie de base qui était attachée au Pokémon mis K.O. vers le Pokémon auquel cette carte est attachée.",
		'en-us': "When your Active Pokémon is Knocked Out by damage from an opponent's attack, you may move 1 basic Energy card that was attached to that Pokémon to the Pokémon this card is attached to.",
		'es-es': "Cuando tu Pokémon Activo quede Fuera de Combate por el daño de un ataque de tu rival, puedes mover 1 carta de Energía Básica que estuviera unida a ese Pokémon al Pokémon al que esté unida esta carta.",
		'it-it': "Quando il tuo Pokémon attivo viene messo KO dai danni inflitti da un attacco del tuo avversario, puoi spostare una carta Energia base che gli era stata assegnata sul Pokémon a cui è assegnata questa carta.",
		'pt-br': "Quando seu Pokémon Ativo for Nocauteado pelos danos causados por um ataque do oponente, você poderá mover 1 card de Energia básica que estava ligado àquele Pokémon para o Pokémon ao qual\nesse card está ligado.",
		'de-de': "Wenn dein Aktives Pokémon durch den Schaden eines gegnerischen Angriffs kampfunfähig wird, kannst du 1 Basis-Energiekarte, die an dieses Pokémon angelegt war, auf das Pokémon verschieben, an das diese Karte angelegt ist."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 273659,
		tcgplayer: 96026
	}
}

export default card
