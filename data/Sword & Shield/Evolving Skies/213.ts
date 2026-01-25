import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Lycanroc VMAX",
		fr: "Lougaroc VMAX",
		es: "Lycanroc VMAX",
		it: "Lycanroc VMAX",
		pt: "Lycanroc VMAX",
		de: "Wolwerock VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",
	illustrator: "Mitsuhiro Arita",
	dexId: [745],

	evolveFrom: {
		en: "Lycanroc V",
		fr: "Lougaroc-V",
		es: "Lycanroc V",
		it: "Lycanroc-V",
		pt: "Lycanroc V",
		de: "Wolwerock-V"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Hunting Claw",
			fr: "Griffe de Chasse"
		},

		effect: {
			en: "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			fr: "Mettez K.O. l'un des Pokémon en jeu de votre adversaire auquel il reste 60 PV ou moins."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Max Edge",
			fr: "Lamomax"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 190
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574140,
		tcgplayer: 246714
	}
}

export default card
