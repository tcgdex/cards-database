import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		it: "Combusken",
		pt: "Combusken",
		de: "Jungglut"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Natural Cure",
				fr: "Remède Naturel",
				es: "Cura Natural",
				it: "Naturcura",
				pt: "Cura Natural",
				de: "Innere Kraft"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
				es: "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				it: "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				pt: "Sempre que ligar 1 carta de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				de: "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
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
				en: "Lunge",
				fr: "Coup Rapide",
				es: "Plancha",
				it: "Affondo",
				pt: "Estocada",
				de: "Anfallen"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363477
	}
}

export default card
