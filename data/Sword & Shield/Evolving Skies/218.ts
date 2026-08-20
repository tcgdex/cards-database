import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Rayquaza VMAX",
		fr: "Rayquaza VMAX",
		es: "Rayquaza VMAX",
		it: "Rayquaza VMAX",
		pt: "Rayquaza VMAX",
		de: "Rayquaza VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "Anesaki Dynamic",
	dexId: [384],

	evolveFrom: {
		en: "Rayquaza V",
		fr: "Rayquaza-V",
		es: "Rayquaza V",
		it: "Rayquaza-V",
		pt: "Rayquaza V",
		de: "Rayquaza-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Azure Pulse",
			fr: "Pouls Azur",
			de: "Azurpuls"
		},

		effect: {
			en: "Once during your turn, you may discard your hand and draw 3 cards.",
			fr: "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes.",
			de: "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			en: "Max Burst",
			fr: "Détonomax",
			de: "Dyna-Detonation"
		},

		effect: {
			en: "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies  de base ou autant d'Énergies  de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Du kannst beliebig viele Basis-{R}-Energien oder beliebig viele Basis-{L}-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574276,
				tcgplayer: 246733
			}
		},
	],
}

export default card
