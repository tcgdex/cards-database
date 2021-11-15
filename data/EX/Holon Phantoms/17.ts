import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Vileplume δ",
		fr: "Rafflesia δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 90,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Pollen",
				fr: "Pollen toxik"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Rafflesia est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer card in your opponent's hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Dresseur dans la main de votre adversaire."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
