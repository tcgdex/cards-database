import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				es: "Rayo Confuso",
				it: "Stordiraggio",
				pt: "Raio da Confusão",
				de: "Konfustrahl"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311889
	}
}

export default card
