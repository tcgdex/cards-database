import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cursed Shovel",
		fr: "Pelle Maudite",
		es: "Pala Maldita",
		it: "Paletta Maledetta",
		pt: "Pá Amaldiçoada",
		de: "Verfluchte Schaufel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, discard the top 2 cards of your opponent's deck.",
		fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque d'un adversaire, défaussez les 2 cartes du dessus du deck de votre adversaire.",
		es: "Si el Pokémon al que está unida esta carta queda Fuera de Combate por el daño de un ataque de tu rival, descarta las 2 primeras cartas de la baraja de tu rival.",
		it: "Se il Pokémon a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco dell'avversario, scarta le prime due carte del mazzo del tuo avversario.",
		pt: "Se o Pokémon ao qual esta carta está ligada for Nocauteado pelo dano de um ataque do seu oponente, descarte as 2 cartas de cima do baralho do seu oponente.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
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
		cardmarket: 458178,
		tcgplayer: 213260
	}
}

export default card
