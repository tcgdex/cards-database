import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sound Veil",
				fr: "Voile Sonore",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all effects of your opponent's attacks, including damage, done to this Pokémon until the end of your opponent's next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à ce Pokémon jusqu’à la fin du prochain tour de votre adversaire.",
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
				en: "Severe Poison",
				fr: "Poison Violent",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
