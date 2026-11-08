import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Rock Guard",
		'fr-fr': "Garde Roche",
		'es-es': "Guardia Roca",
		'it-it': "Rocciodifesa",
		'pt-br': "Protetor de Pedras",
		'de-de': "Schutzfels"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
		'en-us': "If the Pokémon this card is attached to is your Active Pokémon and is damaged by an opponent’s attack (even if that Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
		'es-es': "Si el Pokémon al que está unida esta carta es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si ese Pokémon queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., metti sei segnalini danno sul Pokémon attaccante.",
		'pt-br': "Se este card estiver ligado a seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 6 marcadores de danos no Pokémon Atacante.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, dein Aktives Pokémon ist, und es durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280986,
		tcgplayer: 88766
	}
}

export default card
