import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Healing Berry",
		fr: "Baie de soin",
		de: "Heilungsbeere"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	effect: {
		en: "Attach Healing Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. At the end of any turn, if the Pokémon this card is attached to has 20 HP or less, remove 3 damage counters from that Pokémon and discard this card.",
		fr: "Attachez Baie de soin à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui. Si ce Pokémon est mis K.O., défaussez-vous de cette carte.\n\nÀ la fin de tous les tours, si le Pokémon auquel cette carte est attachée a 20 PV ou moins, retirez 3 marqueurs de dégâts de ce Pokémon et défaussez-vous de cette carte.",
		de: "Hat am Ende eines Zuges das Pokémon, an das diese Karte angelegt ist, 20 KP oder weniger, entferne 3 Schadensmarken von diesem Pokémon und lege diese Karte auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86040,
				cardmarket: 275201
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86040,
				cardmarket: 275201
			}
		},
	]
}

export default card
