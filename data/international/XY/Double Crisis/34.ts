import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Double Magma Energy",
		'fr-fr': "Double Énergie Magma",
		'pt-br': "Energia Magma Dupla",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte ne peut être attachée qu'à un Pokémon de la Team Magma. Défaussez cette carte à la fin du tour pendant lequel vous l'avez attachée.\n\nCette carte ne fournit de l'Énergie {F}{F} que pendant qu'elle est attachée à un Pokémon de la Team Magma.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon de la Team Magma, défaussez cette carte.)",
		'en-us': "This card can only be attached to Team Magma Pokémon. Discard this card at the end of the turn you attached it.\n\nThis card provides {F}{F} Energy only while it is attached to a Team Magma Pokémon.\n\n(If this card is attached to anything other than a Team Magma Pokémon, discard this card.)",
		'pt-br': "Este card só pode ser ligado a Pokémon da Equipe Magma. Descarte-o no final da rodada em que foi ligado. \n\nEste card fornece Energia {F}{F} somente quando está ligado a um Pokémon da Equipe Magma. \n\n(Se este card estiver ligado a qualquer coisa diferente de um Pokémon da Equipe Magma, descarte-o.)",
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 282545,
		tcgplayer: 97080
	}
}

export default card
