import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Plasma Frigate",
		'fr-fr': "Frégate Plasma",
		'es-es': "Fragata Plasma",
		'it-it': "Fregata Plasma",
		'pt-br': "Fragata de Plasma",
		'de-de': "Plasma-Fregatte"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chacun des Pokémon auquel de l’Énergie Plasma est attachée (les vôtres et ceux de votre adversaire) n’a pas de Faiblesse.",
		'en-us': "Each Pokémon that has any Plasma Energy attached to it (both yours and your opponent’s) has no Weakness.",
		'es-es': "Los Pokémon que tengan alguna Energía Plasma unida a ellos (tanto tuyos como de tu rival) no tendrán ninguna Debilidad.",
		'it-it': "I Pokémon che hanno delle Energie Plasma assegnate, sia tuoi che del tuo avversario, non hanno debolezza.",
		'pt-br': "Qualquer Pokémon que possuir alguma Energia de Plasma ligada a ele (seu e do seu oponente) não terá Fraquezas.",
		'de-de': "Jedes Pokémon (deine und die deines Gegners), an dem Plasma-Energie angelegt ist, hat keine Schwäche."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280864,
		tcgplayer: 88158
	}
}

export default card
