import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
		de: "Ultimativ-Zone"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Black Star Promo",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Lors du tour de chaque joueur, celui-ci peut déplacer une carte Énergie attachée à 1 de ses Pokémon de Banc sur son Arceus Actif autant de fois qu'il ou elle le veut.",
		de: "Beliebig oft während seines Zuges kann jeder Spieler 1 Energiekarte von 1 Pokémon auf seiner Bank entfernen und an sein Aktives Arceus anlegen.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
