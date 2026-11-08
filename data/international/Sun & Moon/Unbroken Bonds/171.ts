import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Fairy Charm Ability",
		'fr-fr': "Amulette Féerique Talent",
		'es-es': "Amuleto Hada Habilidad",
		'it-it': "Amuleto Folletto Abilità",
		'pt-br': "Pingente de Fada de Habilidade",
		'de-de': "Feenschmuck Fähigkeit"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX ou Pokémon-EX de votre adversaire qui ont un talent.",
		'en-us': "Prevent all damage done to the Fairy Pokémon this card is attached to by attacks from your opponent’s Pokémon-GX and Pokémon-EX that have Abilities.",
		'es-es': "Evita todo el daño infligido al Pokémon Fairy al que esté unida esta carta por ataques de los Pokémon-GX y Pokémon-EX de tu rival que tengan habilidades.",
		'it-it': "Previeni tutti i danni inflitti al Pokémon Fairy a cui è assegnata questa carta dagli attacchi dei Pokémon-GX e dei Pokémon-EX del tuo avversario che hanno delle abilità.",
		'pt-br': "Previne todo o dano causado ao Pokémon Fairy ao qual esta carta está ligada por ataques dos Pokémon-GX e Pokémon-EX do seu oponente que tenham Habilidades.",
		'de-de': "Verhindere allen Schaden, der dem Fairy-Pokémon, an das diese Karte angelegt ist, durch Attacken von Pokémon-GX und Pokémon-EX deines Gegners, die Fähigkeiten haben, zugefügt wird."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 372456,
		tcgplayer: 189272
	}
}

export default card
