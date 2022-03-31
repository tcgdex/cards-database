import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		it: "Drapion",
		pt: "Drapion",
		de: "Piondragi"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		it: "Skorupi",
		pt: "Skorupi",
		de: "Pionskora"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes Empoisonnées",
				es: "Garras Venenosas",
				it: "Velenartigli",
				pt: "Garras Venenosas",
				de: "Giftkrallen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 70,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
				es: "Impacto Pesado",
				it: "Impatto Pesante",
				pt: "Impacto Pesado",
				de: "Schwerer Einschlag"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
