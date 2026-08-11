import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Potion Energy",
		fr: "Énergie potion",
		de: "Trank-Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn't count as a basic Energy card.)",
		de: "Falls du diese Karte von deiner Hand spielst, entferne eine Schadensmarke von dem Pokémon, unter das du sie legst, falls es welche hat. Trank-Energy spendet -Energie. (Zählt nicht als eine Basis-Energiekarte.)",
		fr: "Si vous jouez cette carte depuis votre main, retirez 1 marqueur de dégâts du Pokémon auquel vous l'attachez, s'il en possède. Énergie potion fournit 1 énergie Incolore. (Ne compte pour une carte Énergie de base.)",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274135,
				tcgplayer: 88350
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274135,
				tcgplayer: 88350
			}
		}
	]
}

export default card
