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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, that player may put an Omanyte, Kabuto, Aerodactyl, Aerodactyl ex, Lileep, or Anorith onto his or her Bench from his or her hand. Treat the new Benched Pokémon as Basic Pokémon.",
		fr: "Une seule fois lors du tour de chaque joueur, ce joueur peut placer Amonita, Kabuto, Ptera, Ptera ex, Lilia, ou Anorith de sa main sur son Banc. Traitez le nouveau Pokémon de Banc comme un Pokémon de base.",
		de: "Einmal während jedes Zuges kann der jeweilige Spieler ein Amonitas, Kabuto, Aerodactyl, Aerodactyl ex, Liliep oder Anorith von seiner Hand auf seine Bank legen. Behandle dieses neue Pokémon als Basis-Pokémon.",
	},

	thirdParty: {
		cardmarket: 276954,
		tcgplayer: 89574
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
