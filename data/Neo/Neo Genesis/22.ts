import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid",
		de: "Elekid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		239,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Playful Punch",
				fr: "Poing joueur",
				de: "Playful Punch"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent's Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, infligez 20 dégâts au Pokémon Actif de votre adversaire. (Appliquez la Faiblesse et la Résistance.) Que ce soit pile ou face, cela termine votre tour. Ce pouvoir ne peut être utilisé si Elekid est Endormi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent's Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed."
			},
		},
	],

	description: {
		fr: "Il fait des moulinets avec ses bras pour générer de l'électricité, mais il se fatigue vite, il ne se recharge donc pas beaucoup."
	},

	thirdParty: {
		cardmarket: 274422
	}
}

export default card
