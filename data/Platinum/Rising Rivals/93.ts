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
		fr: "Une seule fois lors du tour de chaque joueur, si le Banc de ce joueur n'est pas plein, celui-ci peut lancer une pièce. Si c'est face, il ou elle choisit dans son deck un Pokémon de base et le place sur son Banc. Ensuite, il ou elle peut choisir dans son deck une carte Outil Pokémon et l'attacher à ce Pokémon. S'il ou elle a cherché une carte dans son deck, il ou elle mélange son deck.",
		de: "Einmal während seines Zuges kann jeder Spieler, wenn seine Bank nicht voll besetzt ist, 1 Münze werfen. Bei \"Kopf\" durchsucht dieser Spieler sein Deck nach 1 Basis-Pokémon-Karte und legt sie auf seine Bank. Wenn er das macht, kann er sein Deck nach einer Pokémon-Ausrüstungskarte durchsuchen und an dieses Pokémon anlegen. Falls ein Spieler sein Deck durchsucht hat, mischt er sein Deck danach.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278667
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
