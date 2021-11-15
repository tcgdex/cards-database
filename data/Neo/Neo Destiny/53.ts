import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Venomoth",
		fr: "Aéromite lumineux"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venonat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mysterious Wing",
				fr: "Aile mystérieuse"
			},
			effect: {
				en: "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
				fr: "Votre adversaire peut choisir une carte Bébé Pokémon, Pokémon de base ou Évolution de sa pile de défausse et l'ajouter à sa main. Quelle que soit sa décision, vous pouvez faire de même."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Synchronize",
				fr: "Synchronisation"
			},
			effect: {
				en: "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.",
				fr: "Si Aéromite lumineux et le Pokémon Défenseur ont un nombre différent de cartes Énergie attachées à eux, cette attaque ne fait rien."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il se défend en battant des ailes à toute vitesse, libérant une poudre empoisonnée dans les airs."
	}
}

export default card
