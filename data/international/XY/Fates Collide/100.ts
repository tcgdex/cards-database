import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Fairy Garden",
		'fr-fr': "Jardin des Fées",
		'es-es': "Jardín Hada",
		'it-it': "Giardino Fatato",
		'pt-br': "Jardim das Fadas",
		'de-de': "Feenbeet"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chacun des Pokémon auquel de l'Énergie Fairy est attachée (les vôtres et ceux de votre adversaire) n'a pas de Coût de Retraite.",
		'en-us': "Each Pokémon that has any Fairy Energy attached to it (both yours and your opponent's) has no Retreat Cost.",
		'es-es': "Los Pokémon que tengan alguna Energía Fairy unida a ellos (tanto tuyos como de tu rival) no tienen ningún Coste de Retirada.",
		'it-it': "I Pokémon che hanno delle Energie Fairy assegnate, sia tuoi che del tuo avversario, non hanno costo di ritirata.",
		'pt-br': "Qualquer Pokémon que possuir alguma Energia Fairy ligada a ele (seu e do seu oponente) não terá Custo para Recuar.",
		'de-de': "Jedes Pokémon (deine und die deines Gegners), an das Fairy-Energie angelegt ist, hat keine Rückzugskosten."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 289920,
		tcgplayer: 117872
	}
}

export default card
