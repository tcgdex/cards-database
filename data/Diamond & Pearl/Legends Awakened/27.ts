import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ditto DNA",
				fr: "ADN Metamorph",
			},
			effect: {
				en: "As long as Ditto is your Active Pokémon, its maximum HP is the same as your opponent's Active Pokémon. Ditto can use the attacks of that Pokémon as its own. (You still need the necessary Energy to use each attack.) If that Pokémon is no longer your opponent's Active Pokémon, choose 1 of your opponent's Active Pokémon for Ditto to copy.",
				fr: "Tant que Metamorph est votre Pokémon Actif, son maximum de PV est le même que celui du Pokémon Actif de votre adversaire. Metamorph peut utiliser les attaques de ce Pokémon comme si elles étaient les siennes. (Vous devez toujours utiliser l'Énergie nécessaire pour utiliser chaque attaque.) Si ce Pokémon n'est plus le Pokémon Actif de votre adversaire, choisissez 1 des Pokémon Actifs de votre adversaire. Metamorph copie ce Pokémon.",
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
