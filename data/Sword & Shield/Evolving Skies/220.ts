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
		en: "Duraludon VMAX",
		fr: "Duralugon VMAX",
		es: "Duraludon VMAX",
		it: "Duraludon VMAX",
		pt: "Duraludon VMAX",
		de: "Duraludon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "Saki Hayashiro",
	dexId: [884],

	evolveFrom: {
		en: "Duraludon V",
		fr: "Duralugon-V",
		es: "Duraludon V",
		it: "Duraludon-V",
		pt: "Duraludon V",
		de: "Duraludon-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Skyscraper",
			fr: "Gratte-Ciel"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			en: "G-Max Pulverization",
			fr: "Pulvérisation G-Max"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574171,
		tcgplayer: 246754
	}
}

export default card
