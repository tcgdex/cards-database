import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Double Aqua Energy",
		'fr-fr': "Double Énergie Aqua",
		'pt-br': "Energia Aqua Dupla",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte ne peut être attachée qu'à un Pokémon de la Team Aqua. Défaussez cette carte à la fin du tour pendant lequel vous l'avez attachée.\n\nCette carte ne fournit de l'Énergie {W}{W} que pendant qu'elle est attachée à un Pokémon de la Team Aqua.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon de la Team Aqua, défaussez cette carte.)",
		'en-us': "This card can only be attached to Team Aqua Pokémon. Discard this card at the end of the turn you attached it.\n\nThis card provides {W}{W} Energy only while it is attached to a Team Aqua Pokémon.\n\n(If this card is attached to anything other than a Team Aqua Pokémon, discard this card.)",
		'pt-br': "Este card só pode ser ligado a Pokémon da Equipe Aqua. Descarte-o no final da rodada em que foi ligado. \n\nEste card fornece Energia {W}{W} somente quando está ligado a um Pokémon da Equipe Aqua. \n\n(Se este card estiver ligado a qualquer coisa diferente de um Pokémon da Equipe Aqua, descarte-o.)",
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 282544,
		tcgplayer: 97079
	}
}

export default card
