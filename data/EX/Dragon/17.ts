import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
		de: "Magneton"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Field",
				fr: "Champ magnétique",
				de: "Magnetfeld"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have basic Energy cards in your discard pile, you may discard any 1 card from your hand. Then search for up to 2 basic Energy cards from your discard pile, show them to your opponent, and put them into your hand. You can't return the card you first discarded to your hand in this way. This power can't be used if Magneton is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez des cartes Énergie de base dans votre pile de défausse, vous pouvez défausser n'importe quelle carte de votre main. Ensuite, choisissez jusqu'à deux cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et placez-les dans votre main. Vous ne pouvez pas choisir la carte que vous venez de défausser. Ce pouvoir ne peut pas être utilisé si Magneton est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn mindestens 1 Basis-Energiekarte auf deinem Ablagestapel liegt, kannst du 1 Karte von deiner Hand auf den Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Du kannst auf diese Weise nicht die gerade abgelegte Karte auf die Hand nehmen. Diese Poké-Power kann nicht verwendet werden, falls Magneton von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Force",
				fr: "Force magnétique",
				de: "Magnetkraft"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Pokémon (including Magneton).",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon (Magneton inclus).",
				de: "Fügt für jede Energie, die an allen deinen Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 87100,
		cardmarket: 275894
	}
}

export default card
