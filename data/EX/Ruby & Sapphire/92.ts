import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Passe-passe",
		de: "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Échangez un de vos Pokémon Actifs contre un des Pokémon de votre Banc.",
		de: "Tausche 1 deiner Aktiven Pokémon mit 1 der Pokémon auf deiner Bank aus."
	},

	thirdParty: {
		cardmarket: 275740,
		tcgplayer: 89709
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
