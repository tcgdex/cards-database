import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Assault Vest",
		'fr-fr': "Veste de Combat",
		'es-es': "Chaleco Asalto",
		'it-it': "Corpetto assalto",
		'pt-br': "Colete de Ataque",
		'de-de': "Offensivweste"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Tous les dégâts infligés au Pokémon auquel cette carte est attachée par des attaques des Pokémon de votre adversaire qui ont des Énergies spéciales leur étant attachées sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
		'en-us': "Any damage done to the Pokémon this card is attached to by attacks from your opponent's Pokémon that have any Special Energy attached to them is reduced by 40 (after applying Weakness and Resistance).",
		'es-es': "Cualquier daño infligido al Pokémon al que esté unida esta carta por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos se reduce en 40 (después de aplicar Debilidad y Resistencia).",
		'it-it': "I danni inflitti al Pokémon a cui è assegnata questa carta da attacchi di Pokémon dell'avversario che abbiano Energie speciali assegnate sono ridotti di 40, dopo aver applicato debolezza e resistenza.",
		'pt-br': "Qualquer dano causado ao Pokémon ao qual este card está ligado por ataques feitos por um Pokémon do seu oponente que possua uma Energia Especial ligada a ele será reduzido em 40 (após a aplicação de Fraqueza e Resistência).",
		'de-de': "Schaden, der dem Pokémon, an das diese Karte angelegt ist, durch gegnerische Pokémon, an denen Spezial-Energie angelegt ist, zugefügt wird, wird um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 286379,
		tcgplayer: 107252
	}
}

export default card
