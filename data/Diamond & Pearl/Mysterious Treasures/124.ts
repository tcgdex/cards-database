import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Time-Space Distortion",
		fr: "Altération espace-temps",
		de: "Raum-Zeit-Verzerrung"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Flip 3 coins. For each heads, search your discard pile for a Pokémon, show it to your opponent, and put it into your hand.",
		fr: "Lancez 3 pièces. Pour chaque face, choisissez un Pokémon dans votre pile de défausse, montrez-la à votre adversaire et placez-le dans votre main.",
		de: "Wirf 3 Münzen. Durchsuche für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, deinen Ablagestapel nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand."
	},

	thirdParty: {
		cardmarket: 277753,
		tcgplayer: 89920
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		}
	]
}

export default card
