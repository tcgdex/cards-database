import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Fairy Charm Psychic",
		'fr-fr': "Amulette Féerique Psychic",
		'es-es': "Amuleto Hada Psychic",
		'it-it': "Amuleto Folletto Psychic",
		'pt-br': "Pingente de Fada Psychic",
		'de-de': "Feenschmuck Psychic"
	},
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX Psychic ou Pokémon-EX Psychic de votre adversaire.",
		'en-us': "Prevent all damage done to the Fairy Pokémon this card is attached to by attacks from your opponent’s Psychic Pokémon-GX and Psychic Pokémon-EX.",
		'es-es': "Evita todo el daño infligido al Pokémon Fairy al que esté unida esta carta por ataques de los Pokémon-GX Psychic y Pokémon-EX Psychic de tu rival.",
		'it-it': "Previeni tutti i danni inflitti al Pokémon Fairy a cui è assegnata questa carta dagli attacchi dei Pokémon-GX Psychic e dei Pokémon-EX Psychic del tuo avversario.",
		'pt-br': "Previne todo o dano causado ao Pokémon Fairy ao qual esta carta está ligada por ataques dos Pokémon-GX Psychic e Pokémon-EX Psychic do seu oponente.",
		'de-de': "Verhindere allen Schaden, der dem Fairy-Pokémon, an das diese Karte angelegt ist, durch Attacken von Psychic-Pokémon-GX und Psychic-Pokémon-EX deines Gegners zugefügt wird."
	},
	trainerType: "Tool",

}

export default card
