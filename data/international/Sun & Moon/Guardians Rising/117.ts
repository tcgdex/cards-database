import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Altar of the Moone",
		'fr-fr': "Autel de la Lune",
		'es-es': "Altar de la Luna",
		'it-it': "Altare Lunare",
		'pt-br': "Altar Lunar",
		'de-de': "Mondscheiben-Podium"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Coût de Retraite de chaque Pokémon (les vôtres et ceux de votre adversaire) auquel de l’Énergie Psychic ou Darkness est attachée est diminué de ColorlessColorless.",
		'en-us': "The Retreat Cost of each Pokémon (both yours and your opponent’s) that has any Psychic or Darkness Energy attached to it is ColorlessColorless less.",
		'es-es': "El Coste de Retirada de cada Pokémon (tanto tuyos como de tu rival) que tenga alguna Energía Psychic o Darkness unida a él es de ColorlessColorless menos.",
		'it-it': "Il costo di ritirata dei Pokémon, sia tuoi che del tuo avversario, che hanno delle Energie Psychic o Darkness assegnate è ridotto di ColorlessColorless.",
		'pt-br': "O custo de Recuo de cada Pokémon (seus e do seu oponente) que tiver alguma Energia Psychic ou Darkness ligada a ele será ColorlessColorless a menos.",
		'de-de': "Die Rückzugskosten jedes Pokémon (deine und die deines Gegners), an das mindestens 1 Psychic- oder 1 Darkness-Energie angelegt ist, verringern sich um ColorlessColorless."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 297569,
		tcgplayer: 131037
	}
}

export default card
