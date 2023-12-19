import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Conductive Quarry",
		fr: "Carrière conductrice",
		de: "Leitmetall-Mine"
	},
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous le pouvez pas jouer cette carte.\n\nUne seule fois lors du tour de chaque joueur, ce joueur lance une pièce. Si c'est face, il cherche dans sa pile de défausse une carte Énergie  ou , la montre à son adversaire et la place dans sa main.",
		de: "Einmal während seines Zuges kann jeder Spieler 1 Münze werfen. Bei \"Kopf\" durchsucht dieser Spieler seinen Ablagestapel nach 1 - oder -Energiekarte, zeigt sie seinem Gegner und nimmt sie auf die Hand."
	},
	trainerType: "Stadium",

}

export default card
