import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Shadow",
				fr: "Ombre Maudite",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez placer 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Eerie Glow",
				fr: "Lueur Sinistre",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Confused.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
