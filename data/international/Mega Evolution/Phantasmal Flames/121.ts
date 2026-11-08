import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Punk Helmet",
		'fr-fr': "Casque Punk",
		'es-es': "Casco Punki",
		'es-mx': "Casco Punk",
		'de-de': "Punk-Helm",
		'it-it': "Elmo Punk",
		'pt-br': "Capacete Punk"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "If the {D} Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 4 damage counters on the Attacking Pokémon.",
		'fr-fr': "Si le Pokémon {D} auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 4 marqueurs de dégâts sur le Pokémon Attaquant.",
		'es-es': "Si el Pokémon {D} al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 4 contadores de daño en el Pokémon Atacante.",
		'es-mx': "Si el Pokémon {D} al que está unida esta carta está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 4 contadores de daño en el Pokémon Atacante.",
		'de-de': "Wenn das {D}-Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 4 Schadensmarken auf das Angreifende Pokémon.",
		'it-it': "Se il Pokémon {D} a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti quattro segnalini danno sul Pokémon attaccante.",
		'pt-br': "Se o Pokémon {D} ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 4 contadores de dano no Pokémon Atacante."
	},

	trainerType: "Tool",
	regulationMark: "I",

	illustrator: "Studio Bora Inc.",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857696,
				tcgplayer: 662218,
				cardtrader: 356907
			}
		},
	],
}

export default card
