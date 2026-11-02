import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [334],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Midnight Eyes",
				fr: "Yeux de minuit",
				de: "Mitternachtsaugen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perish Song",
				fr: "Requiem",
				de: "Abgesang"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out.",
				fr: "Si le Pokémon Défenseur est Endormi et que l'attaque Yeux de minuit lui a infligé des dégâts lors de votre tour précédent, il est mis K.O.",
				de: "Wenn das Verteidigende Pokémon schläft und in deinem letzten Zug durch Mitternachtsaugen Schaden erhalten hat oder von dessen Effekt betroffen wurde, ist das Verteidigende Pokémon jetzt kampfunfähig."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Song",
				fr: "Chanson guérisseuse",
				de: "Heilgesang"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83517,
				cardmarket: 278439
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278439,
				tcgplayer: 83517
			}
		}
	],

}

export default card
