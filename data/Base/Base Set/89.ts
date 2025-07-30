import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Revive",
		fr: "Réanimation",
		de: "Beleber"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez 1 carte Pokémon de base de votre pile de défausse sur votre Banc. Placez sur lui un nombre de marqueurs de dégâts égal à la moitié de ses PV (arrondis à la dizaine inférieure la plus proche). (Vous ne pouvez pas jouer Réanimation si votre Banc est plein.)",
		de: "Lege eine Basis-Pokémon-Karte Deines Ablagestapel auf Deine Bank. Lege Schadensmarken in Höhe der Hälfte der KP des Pokémon (auf die nächste Zehnerstelle abgerundet) auf die Pokémon-Karte. (Du kannst Beleber nicht einsetzen, wenn Deine Bank voll ist.)"
	},

	thirdParty: {
		cardmarket: 273784,
		tcgplayer: 42432
	}
}

export default card
