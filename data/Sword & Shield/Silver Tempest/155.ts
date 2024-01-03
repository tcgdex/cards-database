import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Emergency Jelly",
		fr: "Gelée de Secours",
		es: "Jalea de Emergencia",
		it: "Spuntino di Emergenza",
		pt: "Geleia Emergencial",
		de: "Notfall-Gelee"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to has 30 HP or less remaining and has any damage counters on it, heal 120 damage from it. If you healed any damage in this way, discard this card.",
		fr: "À la fin de chaque tour, s'il reste 30 PV ou moins et si au moins un marqueur de dégâts est placé sur le Pokémon auquel cette carte est attachée, soignez 120 dégâts de ce Pokémon. Si des dégâts sont ainsi soignés, défaussez cette carte.",
		es: "Al final de cada turno, si al Pokémon al que está unida esta carta le quedan 30 PS o menos y tiene algún contador de daño sobre él, cúrale 120 puntos de daño. Si has curado algún punto de daño de esta manera, descarta esta carta.",
		it: "Alla fine di ogni turno, se il Pokémon a cui è assegnata questa carta ha 30 PS o meno rimanenti e se ha dei segnalini danno, cura quel Pokémon da 120 danni. Se hai curato dei danni in questo modo, scarta questa carta.",
		pt: "No final de cada turno, se o Pokémon ao qual esta carta está ligada tiver PS restante de 30 ou menos e tiver algum contador de dano nele, cure 120 pontos de dano dele. Se você curou qualquer dano desta forma, descarte esta carta.",
		de: "Am Ende jedes Zuges, wenn das Pokémon, an das diese Karte angelegt ist, 30 oder weniger verbleibende KP hat und auf ihm mindestens 1 Schadensmarke liegt, heile 120 Schadenspunkte bei jenem Pokémon. Wenn du auf diese Weise Schaden geheilt hast, lege diese Karte auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card