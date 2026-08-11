import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Panic Mask",
		'fr-fr': "Masque de Panique",
		'es-es': "Máscara del Pánico",
		'it-it': "Maschera di Panico",
		'pt-br': "Máscara Apavorante",
		'de-de': "Panikmaske"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Prevent all damage done to the Pokémon this card is attached to by attacks from your opponent's Pokémon that have 40 HP or less remaining.",
		'fr-fr': "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques des Pokémon de votre adversaire auxquels il reste 40 PV ou moins.",
		'es-es': "Evita todo el daño infligido al Pokémon al que esté unida esta carta por ataques de los Pokémon de tu rival a los que les queden 40 PS o menos.",
		'it-it': "Previeni tutti i danni inflitti al Pokémon a cui è assegnata questa carta dagli attacchi dei Pokémon del tuo avversario che hanno 40 PS o meno rimanenti.",
		'pt-br': "Previna todo o dano causado ao Pokémon ao qual esta carta está ligada por ataques dos Pokémon do seu oponente que tenham PS restante de 40 ou menos.",
		'de-de': "Verhindere allen Schaden, der dem Pokémon, an das diese Karte angelegt ist, durch Attacken von Pokémon deines Gegners, die 40 oder weniger verbleibende KP haben, zugefügt wird."
	},

	trainerType: "Tool",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674173,
				tcgplayer: 284097
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674173,
				tcgplayer: 284097
			}
		},
	],
}

export default card
