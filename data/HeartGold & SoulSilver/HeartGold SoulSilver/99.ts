import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Pokémon Reversal",
		fr: "Inversion de Pokémon",
		de: "Pokémon-Umkehrung"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, choisissez un Pokémon du Banc de votre adversaire et échangez-le avec son Pokémon actif.",
		en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon, and switch it with your opponent's Active Pokémon.",
		de: "Wirf 1 Münze. Wähle bei \"Kopf\" 1 Pokémon auf der Bank deines Gegners und tausche es gegen das Aktive Pokémon deines Gegners aus."
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88236,
				cardmarket: 279071
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88236,
				cardmarket: 279071
			}
		},
		{
			type: "normal",
			stamp: ["gustavo-wada"],
			thirdParty: {
				tcgplayer: 480448,
				cardmarket: 868207
			}
		},
	],

}

export default card
