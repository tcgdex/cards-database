import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [97],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sleep Pendulum",
				fr: "Pendule dodo",
				de: "Schlafpendel"
			},
			effect: {
				en: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you may make the Defending Pokémon Asleep. This power can't be used if Hypno is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Hypnomade est votre Pokémon Actif, vous pouvez faire que le Pokémon Défenseur soit Endormi. Ce pouvoir ne peut pas être utilisé si Hypnomade est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Hypno dein Aktives Pokémon ist, das Verteidigende Pokémon einschlafen lassen. Diese Fähigkeit kann nicht verwendet werden, falls Hypno von einem Speziellen Zustand betroffen ist."
			}
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
				de: "Spiralaura"
			},
			effect: {
				en: "If the Defending Pokémon isn't Knocked Out by the damage from this attack, you may choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
				fr: "Si le Pokémon Défenseur n'est pas mis K.O. par les dégâts de cette attaque, vous pouvez choisir un des Pokémon du Banc de votre adversaire et l'échanger avec le Pokémon Défenseur.",
				de: "Wird das Verteidigende Pokémon durch den Schaden dieses Angriffs nicht kampfunfähig, kannst du 1 der Pokémon auf der Bank deines Gegners wählen und mir dem Verteidigenden Pokémon austauschen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86248,
				cardmarket: 275088
			}
		},
	]
}

export default card
