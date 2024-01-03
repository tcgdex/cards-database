import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
		de: "Kabuto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],

	hp: 30,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Kabuto Armor",
				fr: "Armure Kabuto",
				de: "Kabuto-Harnisch"
			},
			effect: {
				en: "Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack only does half the damage to Kabuto (rounded down to nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is Asleep, Confused, or Paralyzed.",
				fr: "Chaque fois qu'une attaque (même la vôtre) inflige des dégâts à Kabuto (après application de la Faiblesse et de la Résistance), cette attaque inflige seulement la moitié des dégâts à Kabuto (arrondis à la dizaine la plus proche). (Tout autre effet ou attaque intervient toujours.) L'effet de ce pouvoir cesse lorsque Kabuto est Endormi, Confus ou Paralysé.",
				de: "Immer wenn ein Angriff (auch dein eigener) Kabuto Schaden zufügt (nachdem Schwäche und resistenz abgrechnet wurden), fügt dieser Angriff Kabuto nur die hälfte des Schadens (auf die nächsten 10 aufgerundet) zu. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.) Diese Fähigkeit verliert ihre Wirkung, solange Kabuto schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Disparu depuis longtemps, il peut être réanimé génétiquement à partir d'anciens fossiles."
	},

	variants: {
		wPromo: true
	}
}

export default card
