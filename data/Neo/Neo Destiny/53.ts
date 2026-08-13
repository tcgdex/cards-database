import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Venomoth",
		fr: "Aéromite lumineux",
		de: "Helles Omot"
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
		fr: "Mimitoss",
		de: "Bluzuk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mysterious Wing",
				fr: "Aile mystérieuse",
				de: "Seltsame Flügel"
			},
			effect: {
				en: "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
				fr: "Votre adversaire peut choisir une carte Bébé Pokémon, Pokémon de base ou Évolution de sa pile de défausse et l'ajouter à sa main. Quelle que soit sa décision, vous pouvez faire de même.",
				de: "Dein Gegner darf eine Baby-Pokémon-,Basis-Pokémon- oder Evolutionskarte aus seinem Ablagestapel wählen und auf seine Hand nehmen. Unabhängig davon darfst du dasselbe tun."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Synchronize",
				fr: "Synchronisation",
				de: "Übereinstimmen"
			},
			effect: {
				en: "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.",
				fr: "Si Aéromite lumineux et le Pokémon Défenseur ont un nombre différent de cartes Énergie attachées à eux, cette attaque ne fait rien.",
				de: "Wenn an Helles Omot und das verteidigende Pokémon eine unterschiedliche Anzahl Energiekarten angelegt sind, hat dieser Angriff keine Auswirkungen."
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
		en: "It defends itself by flapping its wings at high speed, spreading poisonous powder throughout the air.",
		fr: "Il se défend en battant des ailes à toute vitesse, libérant une poudre empoisonnée dans les airs.",
		de: "Es verteidigt sich selbst, indem es seine Flügel mit hoher Geschwindigkeit bewegt und dabei ein giftiges Puder in der Luft verteilt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274705,
				tcgplayer: 86752
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274705,
				tcgplayer: 86752
			}
		}
	]
}

export default card
