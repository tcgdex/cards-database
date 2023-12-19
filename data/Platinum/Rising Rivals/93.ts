import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Pokémon Contest Hall",
		fr: "La salle de concours Pokémon",
		de: "Pokémon-Wettbewerbshalle"
	},
	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Einmal während seines Zuges kann jeder Spieler, wenn seine Bank nicht voll besetzt ist, 1 Münze werfen. Bei \"Kopf\" durchsucht dieser Spieler sein Deck nach 1 Basis-Pokémon-Karte und legt sie auf seine Bank. Wenn er das macht, kann er sein Deck nach einer Pokémon-Ausrüstungskarte durchsuchen und an dieses Pokémon anlegen. Falls ein Spieler sein Deck durchsucht hat, mischt er sein Deck danach."
	},
	trainerType: "Stadium",

}

export default card
