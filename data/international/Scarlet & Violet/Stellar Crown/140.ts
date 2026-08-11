import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Occa Berry",
		'fr-fr': "Baie Chocco",
		'es-es': "Baya Caoca",
		'it-it': "Baccacao",
		'pt-br': "Fruta Cau",
		'de-de': "Koakobeere"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon this card is attached to is damaged by an attack from your opponent's {R} Pokémon, it takes 60 less damage (after applying Weakness and Resistance), and discard this card.",
		'fr-fr': "Si le Pokémon auquel cette carte est attachée subit les dégâts d'une attaque de l'un des Pokémon {R} de votre adversaire, il subit 60 dégâts de moins (après application de la Faiblesse et de la Résistance), et vous défaussez cette carte.",
		'es-es': "Si el Pokémon al que está unida esta carta resulta dañado por un ataque de los Pokémon {R} de tu rival, ese ataque le hace 60 puntos de daño menos (después de aplicar Debilidad y Resistencia), y descartas esta carta.",
		'it-it': "Se il Pokémon a cui è assegnata questa carta viene danneggiato da un attacco di un Pokémon {R} del tuo avversario, subisce 60 danni in meno, dopo aver applicato debolezza e resistenza, e tu scarti questa carta.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada for danificado por um ataque dos Pokémon {R} do seu oponente, ele receberá 60 pontos de dano a menos (depois de aplicar Fraqueza e Resistência), e descarte esta carta.",
		'de-de': "Wenn das Pokémon, an das diese Karte angelegt ist, durch eine Attacke von {R}-Pokémon deines Gegners Schaden erhält, werden ihm 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden), und du legst diese Karte auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785994,
				tcgplayer: 567409
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785994,
				tcgplayer: 567409
			}
		},
	],

	illustrator: "Studio Bora Inc.",

}

export default card
