import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sleep Pendulum",
				fr: "Pendule dodo",
				de: "Sleep Pendulum"
			},
			effect: {
				en: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you may make the Defending Pokémon Asleep. This power can't be used if Hypno is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Hypnomade est votre Pokémon Actif, vous pouvez faire que le Pokémon Défenseur soit Endormi. Ce pouvoir ne peut pas être utilisé si Hypnomade est affecté par un État spécial.",
				de: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you make the Defending Pokémon Asleep. This power can't be used if Hypno is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Aura",
				fr: "Aura spirale",
				de: "Spiral Aura"
			},
			effect: {
				en: "If the Defending Pokémon isn't Knocked Out by the damage from this attack, you may choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
				fr: "Si le Pokémon Défenseur n'est pas mis K.O. par les dégâts de cette attaque, vous pouvez choisir un des Pokémon du Banc de votre adversaire et l'échanger avec le Pokémon Défenseur.",
				de: "If the Defending Pokémon isn't Knocked Out by the damage from this attack, you may choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275053
	}
}

export default card
