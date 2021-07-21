import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
		es: "Geodude de Alola",
		it: "Geodude di Alola",
		pt: "Geodude de Alola",
		de: "Alola-Kleinstein"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Charge",
				fr: "Chargeur",
				es: "Carga",
				it: "Sottocarica",
				pt: "Carga",
				de: "Ladevorgang"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Bomb",
				fr: "Bombe Fracassante",
				es: "Bomba Aplastante",
				it: "Bomba Cilecca",
				pt: "Bomba Esmagadora",
				de: "Schmetterbombe"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
