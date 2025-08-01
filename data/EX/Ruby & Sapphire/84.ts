import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
		de: "Prunusbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Prine à un de vos Pokémon qui n'a pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-cette carte.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède des États Spéciaux, retirez-les lui tous. Ensuite, défaussez Baie Prine.[1]",
		de: "Wenn zu irgendeinem Zeitpunkt zwischen den Zügen das Pokémon, an dem die Prunusbeere angelegt ist, von einem Speziellen Zustand betroffen ist, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung. Lege Prunusbeere danach auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275732
	}
}

export default card
