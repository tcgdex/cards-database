import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Typhlosion",
		fr: "Typhlosion obscur",
		de: "Dunkles Tornupto"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
				fr: "Combo-serres",
				de: "Klauenschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Rushing Flames",
				fr: "Vague de flammes",
				de: "Brausende Flammen"
			},
			effect: {
				en: "You may discard any number of Energy cards attached to your Pokémon. Flip a coin for each Energy card discarded in this way. This attack does 40 damage times the number of heads.",
				fr: "Vous pouvez vous défausser de n'importe quel nombre de cartes Énergie  attachées à votre Pokémon. Lancez une pièce pour chaque carte Énergie  défaussée de cette manière. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				de: "Du kannst eine beliebige Anzahl an dein Pokémon angelegte -Energiekarten auf deinen Ablagestapel legen. Wirf für jede -Energiekarte, die du auf diese Weise auf deinen Ablagestapel gelegt hast, eine Münze. Dieser angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Quand il se bat, l'air autour de lui scintille et semble s'enflammer à cause de l'intense chaleur émanant de lui."
	},

	thirdParty: {
		cardmarket: 274662,
		tcgplayer: 84659
	}
}

export default card
