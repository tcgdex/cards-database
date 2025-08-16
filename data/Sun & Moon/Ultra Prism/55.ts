import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		it: "Drapion",
		pt: "Drapion",
		de: "Piondragi"
	},

	illustrator: "Studio Bora Inc.",
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
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dangerous Stinger",
				fr: "Dard Redoutable",
				es: "Aguijón Peligroso",
				it: "Pungiglione Letale",
				pt: "Ferrão Pernicioso",
				de: "Stachel der Gefahr"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 315985,
		tcgplayer: 157672
	}
}

export default card
