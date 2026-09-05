import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton"
	},

	illustrator: "Hikaru Koike",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 70,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		de: "Magnetilo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Flow",
				fr: "Torrent magnétique",
				de: "Magnetisches Fließen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent's Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can't be used if Magneton is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Magneton est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, choisissez deux des Pokémon de votre adversaire avec des cartes Énergie attachées à eux. Choisissez une des cartes Énergie attachée à chacun de ces Pokémon et échangez-les entre les Pokémon. Ce pouvoir ne peut pas être utilisé si Magneton est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du, falls Magneton dein Aktives Pokémon ist, eine Münze werfen. Wähle bei „Kopf“ 2 der Pokémon deines Gegners, an die Energiekarten angelegt sind. Wähle jeweils 1 der an diese Pokémon angelegten Energiekarten und tausche sie zwischen diesen Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls Magneton von einem Speziellen Zustand betroffen ist."
			}
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
				de: "Stahlwelle"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire qui sont du même type (de la même couleur) que le Pokémon Défenseur. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Dieser Angriff fügt allen Pokémon auf der Bank deines Gegner, die denselben Typ (dieselbe Farbe) wie das Verteidigende Pokémon haben, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87094,
				cardmarket: 275094
			}
		},
	]
}

export default card
