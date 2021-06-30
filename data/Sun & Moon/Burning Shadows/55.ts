import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Boost",
				fr: "Boost de Poison",
				es: "Impulso Veneno",
				it: "Velenocarica",
				pt: "Impulso de Veneno",
				de: "Giftverstärker"
			},
			effect: {
				en: "If this Pokémon is Poisoned, this attack does 80 more damage. Then, remove that Special Condition from this Pokémon.",
				fr: "Si ce Pokémon est Empoisonné, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez cet État Spécial de ce Pokémon.",
				es: "Si este Pokémon está Envenenado, este ataque hace 80 puntos de daño más. Después, elimina esa Condición Especial de este Pokémon.",
				it: "Se questo Pokémon è avvelenato, questo attacco infligge 80 danni in più. Poi, rimuovi tale condizione speciale da questo Pokémon.",
				pt: "Se este Pokémon estiver Envenenado, este ataque causará 80 pontos de dano a mais. Em seguida, remova aquela Condição Especial deste Pokémon.",
				de: "Wenn dieses Pokémon vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Jener Spezielle Zustand auf diesem Pokémon verliert anschließend seine Wirkung."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
