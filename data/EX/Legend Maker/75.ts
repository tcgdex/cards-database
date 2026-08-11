import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Giant Stump",
		fr: "Souche géante",
		de: "Riesiger Baumstumpf"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player can't have more than 3 Benched Pokémon. When Giant Stump comes into play, each player discards Benched Pokémon and any cards attached to them until he or she has 3 Benched Pokémon. (You discard your Pokémon first.)",
		fr: "Chaque joueur ne peut pas avoir plus de 3 Pokémon de Banc.\n\nLorsque Souche géante entre en jeu, chaque joueur doit défausser des Pokémon de Banc, ainsi que toutes les cartes qui leur sont attachées, jusqu'à ce qu'il ne lui reste plus que 3 Pokémon de Banc. (Vous défaussez vos Pokémon en premier.)",
		de: "Jeder Spieler kann nicht mehr als 3 Pokémon auf der Bank haben.\n\nWenn Riesiger Bumstumpf ins Spiel kommt, legt jeder Spieler so lange Pokémon (inklusive der an diese angelegten Karten) auf den Ablagestapel, bis sich nur noch 3 Pokémon auf der Bank befinden. (Du musst als Erster Pokémon ablegen.)",
	},

	thirdParty: {
		cardmarket: 276952,
		tcgplayer: 85697
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		}
	]
}

export default card
