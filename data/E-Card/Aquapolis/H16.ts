import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
		de: "Magneton"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Flow",
				fr: "Torrent magnétique",
				de: "Magnetic Flow"
			},
			effect: {
				en: "Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent's Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can't be used if Magneton is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Magneton est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, choisissez deux des Pokémon de votre adversaire avec des cartes Énergie attachées à eux. Choisissez une des cartes Énergie attachée à chacun de ces Pokémon et échangez-les entre les Pokémon. Ce pouvoir ne peut pas être utilisé si Magneton est affecté par un État spécial.",
				de: "Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent's Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can't be used if Magneton is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Wave",
				fr: "Vague d'acier",
				de: "Steel Wave"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire qui sont du même type (de la même couleur) que le Pokémon Défenseur. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "This attack does 10 damage to each of your opponent's Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275049
	}
}

export default card
