import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Festival Grounds",
		'fr-fr': "Lieu de la Fête",
		'es-es': "Recinto del Festival",
		'it-it': "Area della Festa",
		'pt-br': "Praça de Festas",
		'de-de': "Festplatz"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each Pokémon that has any Energy attached (both yours and your opponent's) recovers from all Special Conditions and can't be affected by any Special Conditions.",
		'fr-fr': "Chacun des Pokémon auxquels au moins une Énergie est attachée (les vôtres et ceux de votre adversaire) guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial.",
		'es-es': "Cada Pokémon que tenga alguna Energía unida (tanto tuyos como de tu rival) se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
		'it-it': "Ciascun Pokémon che ha delle Energie assegnate, sia tuo che del tuo avversario, guarisce da tutte le condizioni speciali e non può esserne influenzato.",
		'pt-br': "Cada Pokémon que tem alguma Energia ligada a ele (seus e do seu oponente) recupera-se de todas as Condições Especiais e não pode ser afetado por quaisquer Condições Especiais.",
		'de-de': "Jedes Pokémon (deine und die deines Gegners), an das mindestens 1 Energie angelegt ist, erholt sich von allen Speziellen Zuständen und kann von keinen Speziellen Zuständen betroffen werden."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769323,
				tcgplayer: 550193
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769323,
				tcgplayer: 550193
			}
		},
	],

	illustrator: "MARINA Chikazawa",

}

export default card