import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer 1 carte Énergie de base qui était attachée au Pokémon mis K.O. vers le Pokémon auquel cette carte est attachée.",
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281018,
		tcgplayer: 85366
	}
}

export default card
