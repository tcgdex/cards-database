import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Delphox BREAK",
		fr: "Goupelin TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 180,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Delphox",
		fr: "Goupelin",
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flare Witch",
				fr: "Sorcier Flamboyant",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			},
		},
	],

	retreat: 0
}

export default card
