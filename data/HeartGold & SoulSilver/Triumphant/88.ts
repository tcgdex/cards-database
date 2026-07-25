import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Seeker",
		fr: "Détecteur",
		de: "Fahnder"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur récupère l’un de ses Pokémon de Banc dans sa main, ainsi que toutes les cartes qui lui sont attachées. (Vous récupérez votre Pokémon en premier.)",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Each player returns 1 of his or her Benched Pokémon and all cards attached to it to his or her hand. (You return your Pokémon first.)",
		de: "Jeder Spieler nimmt 1 Pokémon von seiner Bank und alle daran angelegten Karten zurück auf seine Hand. (Du nimmst dein Pokémon zuerst.)"
	},

	trainerType: "Supporter",

	hp: 0,

	thirdParty: {
		cardmarket: 279618,
		tcgplayer: 89046
	}
	retreat: 0
}

export default card
