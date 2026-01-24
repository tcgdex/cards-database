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
		en: "Inteleon",
		fr: "Lézargus",
		es: "Inteleon",
		it: "Inteleon",
		pt: "Inteleon",
		de: "Intelleon"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	illustrator: "Saki Hayashiro",
	dexId: [818],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
		es: "Drizzile",
		it: "Drizzile",
		pt: "Drizzile",
		de: "Phlegleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting",
			fr: "Tir Rapide"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574285,
		tcgplayer: 246802
	}
}

export default card
