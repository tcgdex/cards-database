import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Healing Berry",
		fr: "Baie de soin",
		de: "Heilungsbeere"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie de soin à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui. Si ce Pokémon est mis K.O., défaussez-vous de cette carte.\n\nÀ la fin de tous les tours, si le Pokémon auquel cette carte est attachée a 20 PV ou moins, retirez 3 marqueurs de dégâts de ce Pokémon et défaussez-vous de cette carte.",
		de: "Hat am Ende eines Zuges das Pokémon, an das diese Karte angelegt ist, 20 KP oder weniger, entferne 3 Schadensmarken von diesem Pokémon und lege diese Karte auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275201
	}
}

export default card
