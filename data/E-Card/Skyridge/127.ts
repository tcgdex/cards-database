import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Hyper Potion",
		de: "Hyper-Trank"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon. Discard 1 or 2 basic Energy cards attached to that Pokémon. If you discarded 1 Energy card, remove up to 3 damage counters from that Pokémon. If you discarded 2 Energy cards, remove up to 5 damage counters from that Pokémon.",
		de: "Wähle eines deiner Pokémon. Lege 1 oder 2 an dieses Pokémon angelgte Basis-Energiekarten auf deinen Ablagestapel. Hast du 1 Energiekarte auf deinen Ablagestapel gelegt, entferne bis zu 3 Schadensmarken von diesem Pokémon. Hast du 2 Energiekarten auf deinen Ablagestapel gelegt, entferne bis zu 5 Schadensmarken von deinem Pokémon."
	},

	thirdParty: {
		cardmarket: 275385,
		tcgplayer: 86246
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
