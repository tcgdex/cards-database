import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Rocky Helmet",
		'fr-fr': "Casque Brut",
		'es-es': "Casco Dentado",
		'it-it': "Bitorzolelmo",
		'pt-br': "Capacete de Pedra",
		'de-de': "Beulenhelm"
	},

	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		'en-us': "If the Pokémon this card is attached to is your Active Pokémon and is damaged by an opponent’s attack (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		'es-es': "Si el Pokémon al que está unida esta carta es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si ese Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante,",
		'it-it': "Se il Pokémon a cui è assegnata questa carta è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K,O metti due segnalini danno sul Pokémon attaccante,",
		'pt-br': "Se este card estiver ligado a seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 2 marcadores de danos no Pokémon Atacante.",
		'de-de': "Wenn das Pokémon, an dem diese Karte angelegt ist, dein Aktives Pokémon ist und es durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon,"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280740,
		tcgplayer: 88804
	}
}

export default card
