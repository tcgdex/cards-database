import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V",
		pt: "Zacian V",
		de: "Zacian V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Intrepid Sword",
			pt: "Intrepid Sword",
			de: "Kühnes Schwert"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
			pt: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends.",
			de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten deines Decks anschauen und beliebig viele Metal-Energiekarten, die du dort findest, an dieses Pokémon anlegen. Nimm die anderen Karten auf deine Hand. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		name: {
			en: "Brave Blade",
			pt: "Brave Blade",
			de: "Couragierte Klinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			pt: "During your next turn, this Pokémon can’t attack.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	stage: "Basic",
	suffix: "V",
	dexId: [888],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card