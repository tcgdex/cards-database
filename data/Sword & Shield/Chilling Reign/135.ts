import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Butte du Dynarbre",
		en: "Dyna Tree Hill",
		es: "Colina del Maxiárbol",
		it: "Collina Dynalbero",
		pt: "Colina Dinárvore",
		de: "Hügel des Dyna-Baums"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
		en: "Pokémon (both yours and your opponent's) can't be healed.",
		es: "Los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
		it: "I Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
		pt: "Os Pokémon (seus e do seu oponente) não podem ser curados.",
		de: "Pokémon (deine und die deines Gegners) können nicht geheilt werden."
	},

	trainerType: "Stadium",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 567242,
		tcgplayer: 241827
	}
}

export default card
