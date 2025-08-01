import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Power Tree",
		fr: "Arbre à puissance",
		de: "Energiebaum"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nUne seule fois lors du tour de chaque joueur, si le joueur ne possède pas de cartes Énergie spéciale dans sa pile de défausse, il peut y choisir une carte Énergie de base. Il la montre alors à son adversaire et la place dans sa main.",
		de: "Einmal während jedes Zuges durchsucht der jeweilige Spieler, wenn sich keine Spezialenergiekarten in seinem Ablagestapel befinden, seinen Ablagestapel nach einer Basis-Energiekarte, zeigt sie seinem Gegner und nimmt sie dann auf die Hand."
	},

	thirdParty: {
		cardmarket: 276953,
		tcgplayer: 88355
	}
}

export default card
