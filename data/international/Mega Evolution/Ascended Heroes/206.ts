import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Hypnotizer",
		'fr-fr': "Hypnotiseur de la Team Rocket",
		'es-es': "Hipnotizador del Team Rocket",
		'es-mx': "Hipnocasco del Equipo Rocket",
		'de-de': "Team Rockets Hypnotizer",
		'it-it': "Ipnotizzatore del Team Rocket",
		'pt-br': "Hipnotizador da Equipe Rocket"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Team Rocket's Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Team Rocket's Pokémon is Knocked Out), the Attacking Pokémon is now Asleep.",
		'fr-fr': "Si le Pokémon de la Team Rocket auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon de la Team Rocket est mis K.O.), le Pokémon Attaquant est maintenant Endormi.",
		'es-es': "Si el Pokémon del Team Rocket al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon del Team Rocket queda Fuera de Combate), el Pokémon Atacante pasa a estar Dormido.",
		'es-mx': "Si el Pokémon del Equipo Rocket al que está unida esta carta está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante ahora está Dormido.",
		'de-de': "Wenn das Team Rockets Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Team Rockets Pokémon dadurch kampfunfähig wird), schläft das Angreifende Pokémon jetzt.",
		'it-it': "Se il Pokémon del Team Rocket a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se questo Pokémon del Team Rocket viene messo KO, il Pokémon attaccante viene addormentato.",
		'pt-br': "Se o Pokémon da Equipe Rocket ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon da Equipe Rocket seja Nocauteado), o Pokémon Atacante agora estará Adormecido."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869817,
			tcgplayer: 676018
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869817,
			tcgplayer: 676018
		}
	}
],
}

export default card
