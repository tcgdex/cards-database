import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Team Galactic's Invention G-107 Technical Machine",
		fr: "Machine Technique  Invention G-107 de Team Galaxie",
		de: "Team Galaktiks Erfindung G-107 Technische Maschine"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	suffix: "SP",

	effect: {
		fr: "Attachez cette carte à 1 de vos Pokémon SP en jeu. Celui-ci peut utiliser l'attaque de cette carte à la place de la sienne. Lorsque le Pokémon auquel cette carte est attachée n'est plus un Pokémon SP, défaussez cette carte.",
		de: "Lege diese Karte an 1 deiner Pokémon SP im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstelle seiner eigenen Angriffe benutzen. Wenn das Pokémon, an das diese Karte angelegt ist, kein Pokémon SP mehr ist, lege diese Karte auf den Ablagestapel."
	},

	trainerType: "Technical Machine",

	attacks: [{
		name: {
			de: "Schadensträger"
		},

		effect: {
			de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte mal der Anzahl Schadensmarken auf dem Pokémon, an dem diese Karte angelegt ist, zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	thirdParty: {
		cardmarket: 278669
	}
}

export default card
