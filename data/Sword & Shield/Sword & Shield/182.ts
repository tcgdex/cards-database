import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus",
		es: "Baya Zidra",
		it: "Baccacedro",
		pt: "Fruta Sitrus",
		de: "Tsitrubeere"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to has 3 or more damage counters on it, heal 30 damage from it and discard this card.",
		fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée a au moins 3 marqueurs de dégâts, soignez 30 de ses dégâts, puis défaussez cette carte.",
		es: "Al final de cada turno, si el Pokémon al que está unida esta carta tiene 3 contadores de daño o más sobre él, cúrale 30 puntos de daño y descarta esta carta.",
		it: "Alla fine di ogni turno, se il Pokémon a cui è assegnata questa carta ha tre o più segnalini danno, cura quel Pokémon da 30 danni. Poi scarta questa carta.",
		pt: "No final de cada turno, se o Pokémon ao qual esta carta está ligada tiver 3 ou mais contadores de dano nele, cure 30 pontos de dano dele e descarte esta carta.",
		de: "Am Ende jedes Zuges, wenn auf dem Pokémon, an das diese Karte angelegt ist, 3 oder mehr Schadensmarken liegen, heile 30 Schadenspunkte bei jenem Pokémon und lege diese Karte auf deinen Ablagestapel."
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
		cardmarket: 437004
	}
}

export default card
