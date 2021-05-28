import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Skuntank",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		435,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Gas",
				fr: "Gaz d'évolution",
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Skuntank from your hand to evolve 1 of your Active Pokémon, you may choose 1 of the Defending Pokémon. If that Pokémon tries to attack during your opponent's next turn, that attack does nothing.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Moufflair de votre main pour faire évoluer 1 de vos Pokémon Actifs, vous pouvez choisir 1 des Pokémon  Défenseurs. Si ce Pokémon essaye d'attaquer lors du prochain tour de votre adversaire, cette attaque est sans effet.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes empoisonnées",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon  Défenseur est maintenant Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plunder",
				fr: "Pillage",
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
