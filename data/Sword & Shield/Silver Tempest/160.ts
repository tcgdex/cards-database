import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Leafy Camo Poncho",
		fr: "Poncho de Camouflage Feuillu",
		es: "Poncho de Camuflaje de Hojas",
		it: "Fogliaponcho Mimetico",
		pt: "Poncho Folhoso de Camuflagem",
		de: "Blättriger Tarnponcho"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to the Pokémon VSTAR or Pokémon VMAX this card is attached to.",
		fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur le Pokémon-VSTAR ou le Pokémon-VMAX auquel cette carte est attachée.",
		es: "Cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos al Pokémon V-ASTRO o al Pokémon VMAX al que esté unida esta carta.",
		it: "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta sul Pokémon-V ASTRO o Pokémon-VMAX a cui è assegnata questa carta.",
		pt: "Sempre que seu oponente jogar 1 carta de Apoiador da própria mão, previna todos os efeitos daquela carta causados ao Pokémon V-ASTRO ou Pokémon VMAX ao qual esta carta está ligada.",
		de: "Verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die dem Pokémon-VSTAR oder Pokémon-VMAX, an das diese Karte angelegt ist, zugefügt werden."
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682207,
		tcgplayer: 451808
	}
}

export default card