import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		de: "Stollos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heap Up",
				fr: "Empiler",
				de: "Aufhäufen"
			},
			effect: {
				en: "Search your discard pile for all Energy cards and show them to your opponent. If you find any Metal Special Energy cards there, this attack does 40 damage plus 30 more damage. Put all of those Energy cards on top of your deck. Shuffle your deck afterward.",
				fr: "Cherchez dans votre pile de défausse toutes les cartes Énergie et montrez-les à votre adversaire. Si vous y trouvez des cartes Énergie Spéciale Metal, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Placez toutes ces cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Durchsuche deinen Ablagestapel nach allen Energiekarten und zeige sie deinem Gegner. Wenn mindestens 1 dieser Energiekarten eine -Spezialenergiekarte ist, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu. Lege alle diese Energiekarten auf dein Deck. Mische dein Deck danach."
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Hard Metal",
				fr: "Métal dur",
				de: "Hartmetall"
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Aggron does 40 damage to itself.",
				fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Galeking s'inflige alors 40 dégâts.",
				de: "Du kannst mit diesem Angriff 60 Schadenspunkte plus weitere 40 Schadenspunkte zufügen. Wenn du das machst, fügt sich Stolloss selbst 40 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "Il creuse des galeries à travers la pierre avec ses cornes d'acier pour trouver le fer qu'il apprécie."
	}
}

export default card
