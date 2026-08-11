import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Life Dew",
		'fr-fr': "Rosée de Vie",
		'es-es': "Rocío de Vida",
		'it-it': "Rugiada della Vita",
		'pt-br': "Orvalho da Vida",
		'de-de': "Lebenstau"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère 1 carte Récompense de moins.",
		'en-us': "If the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card.",
		'es-es': "Si el Pokémon al que está unida esta carta queda Fuera de Combate, tu rival coge 1 carta de Premio menos.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta viene messo K.O., il tuo avversario prende una carta Premio in meno.",
		'pt-br': "Se o Pokémon ao qual este card está ligado for Nocauteado, seu oponente levará 1 card de Prêmio a menos.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, kampfunfähig wird, darf dein Gegner dafür 1 Preiskarte weniger als üblich nehmen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280985,
		tcgplayer: 86729
	}
}

export default card
