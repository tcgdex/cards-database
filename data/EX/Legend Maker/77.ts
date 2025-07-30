import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Strange Cave",
		fr: "Cave étrange",
		de: "Seltsame Höhle"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nUne seule fois lors du tour de chaque joueur, ce joueur peut placer Amonita, Kabuto, Ptera, Ptera ex, Lilia, ou Anorith de sa main sur son Banc. Traitez le nouveau Pokémon de Banc comme un Pokémon de base.",
		de: "Einmal während jedes Zuges kann der jeweilige Spieler ein Amonitas, Kabuto, Aerodactyl, Aerodactyl ex, Liliep oder Anorith von seiner Hand auf seine Bank legen. Behandle dieses neue Pokémon als Basis-Pokémon."
	},

	thirdParty: {
		cardmarket: 276954
	}
}

export default card
