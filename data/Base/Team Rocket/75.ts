import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Digger",
		fr: "Excavatrice",
		de: "Bagger"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If tails, do 10 damage to your Active Pokémon. If heads, your opponent flips a coin. If tails, your opponent does 10 damage to his or her Active Pokémon. If heads, you flip a coin. Keep doing this until a player gets tails.",
		fr: "Lancez une pièce. Si c'est pile, infligez 10 dégâts à votre Pokémon Actif. Si c'est face, votre adversaire lance une pièce. Si c'est pile, votre adversaire inflige 10 dégâts à son Pokémon Actif. Si c'est face, vous lancez une pièce. Continuez ainsi jusqu'à ce que l'un des joueurs obtienne pile.",
		de: "Wirf eine Münze. Bei „Zahl“ fügst du deinem aktiven Pokémon 10 Schadenspunkte zu. Bei „Kopf“ wirft dein Gegner eine Münze. Bei „Zahl“ fügt dein Gegner seinem oder ihrem aktiven Pokémon 10 Schadenspunkte zu. Bei „Kopf“ wirfst du eine Münze. Fahre damit fort, bis ein Spieler „Zahl“ wirft."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274128,
				tcgplayer: 84815
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274128,
				tcgplayer: 84815
			}
		}
	]
}

export default card
