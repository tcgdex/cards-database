import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lucky Egg",
		fr: "Œuf Chance",
		es: "Huevo Suerte",
		it: "Fortunuovo",
		pt: "Ovo da Sorte",
		de: "Glücks-Ei"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, draw cards until you have 7 cards in your hand.",
		fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de l'adversaire, piochez des cartes jusqu'à en avoir 7 en main.",
		es: "Si el Pokémon al que está unida esta carta queda Fuera de Combate por el daño de un ataque de tu rival, roba cartas hasta que tengas 7 cartas en tu mano.",
		it: "Se il Pokémon a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco dell'avversario, pesca fino ad avere sette carte in mano.",
		pt: "Se o Pokémon ao qual esta carta está ligada for Nocauteado pelo dano de um ataque do seu oponente, compre cartas até ter 7 cartas na sua mão.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke deines Gegners kampfunfähig wird, ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436929,
		tcgplayer: 208493
	}
}

export default card
