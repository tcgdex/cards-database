import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Farewell Bell",
		fr: "Grelot d'Adieu",
		es: "Cascabel de Despedida",
		it: "Sonaglio di Addio",
		pt: "Sino de Despedida",
		de: "Abschiedsglocke"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon VMAX this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
		fr: "Si le Pokémon-VMAX auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		es: "Si el Pokémon VMAX al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Se il Pokémon-VMAX a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Se o Pokémon VMAX ao qual esta carta está ligada for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Wenn das Pokémon-VMAX, an das diese Karte angelegt ist, durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Tool",
	regulationMark: "E",
	illustrator: "AYUMI ODASHIMA",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582970,
		tcgplayer: 253107
	}
}

export default card