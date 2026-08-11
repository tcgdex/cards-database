import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
		de: "Ultimativ-Zone"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. During each player's turn, the player may move an Energy card attached to 1 of his or her Benched Pokémon to his or her Active Arceus as often as he or she likes.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous le pouvez pas jouer cette carte.\n\nLors du tour de chaque joueur, celui-ci peut déplacer une carte Énergie attachée à 1 de ses Pokémon de Banc sur son Arceus Actif autant de fois qu'il ou elle le veut.",
		de: "Beliebig oft während seines Zuges kann jeder Spieler 1 Energiekarte von 1 Pokémon auf seiner Bank entfernen und an sein Aktives Arceus anlegen."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
