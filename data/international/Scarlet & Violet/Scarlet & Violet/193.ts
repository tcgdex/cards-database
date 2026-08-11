import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rocky Helmet",
		'fr-fr': "Casque Brut",
		'es-es': "Casco Dentado",
		'it-it': "Bitorzolelmo",
		'pt-br': "Capacete de Pedra",
		'de-de': "Beulenhelm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même s'il est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		'es-es': "Si el Pokémon al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que ele seja Nocauteado), coloque 2 contadores de dano no Pokémon Atacante.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Ayaka Yoshida",

	thirdParty: {
        cardmarket: 702489,
        tcgplayer: 488100
    }
}

export default card