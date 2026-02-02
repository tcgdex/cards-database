import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Dracozolt VMAX",
		fr: "Galvagon VMAX",
		es: "Dracozolt VMAX",
		it: "Dracozolt VMAX",
		pt: "Dracozolt VMAX",
		de: "Lectragon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "5ban Graphics",
	dexId: [880],

	evolveFrom: {
		en: "Dracozolt V",
		fr: "Galvagon-V",
		es: "Dracozolt V",
		it: "Dracozolt-V",
		pt: "Dracozolt V",
		de: "Lectragon-V"
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Spark Trap",
			fr: "Piège Étincelle"
		},

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant."
		},

		damage: 60
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Impact",
			fr: "Impactomax"
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574083,
		tcgplayer: 246925
	}
}

export default card
