import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy counts as every type of basic Energy but only provide 1 Energy at a time. (Doesn't count as a basic Energy card when not in play.) When your attach this card from your hand to 1 of your Pokémon, it does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
		fr: "Attachez Énergie multicolore à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergie multicolore compte comme n'importe quel type de carte Énergie de base mais ne fournit qu'une seule Énergie à la fois. (Ne compte pas pour une carte Énergie lorsqu'elle n'est pas en jeu). Lorsque vous attachez cette carte à 1 de vos Pokémon depuis votre main, elle inflige 10 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance).",
	},

	thirdParty: {
		cardmarket: 274070,
		tcgplayer: 88551
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
