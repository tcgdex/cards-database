import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Moon & Sun Badge",
		fr: "Badge Lune et Soleil",
		es: "Medalla de Luna y Sol",
		it: "Medaglia Luna e Sole",
		pt: "Moon & Sun Badge",
		de: "Mondsonnenorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon V this card is attached to has “Espeon” or “Umbreon” in its name, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to that Pokémon.",
		fr: "Si le Pokémon-V auquel cette carte est attachée a « Mentali » ou « Noctali » dans son nom, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon-là.",
		es: "Si el Pokémon V al que está unida esta carta tiene “Espeon” o “Umbreon” en su nombre, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a ese Pokémon.",
		it: "Se il Pokémon-V a cui è assegnata questa carta ha “Espeon” o “Umbreon” nel nome, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta su quel Pokémon.",
		pt: "If the Pokémon V this card is attached to has “Espeon” or “Umbreon” in its name, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to that Pokémon.",
		de: "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, „Psiana“ oder „Nachtara“ zum Namen gehört, verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die jenem Pokémon zugefügt werden."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc."
}

export default card
