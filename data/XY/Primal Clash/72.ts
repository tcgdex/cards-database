import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dancing Tentacles",
				fr: "Tentacules Dansantes",
				es: "Tentáculos Bailarines",
				it: "Tentacoli Danzanti",
				pt: "Tentáculos Dançantes",
				de: "Tanzende Tentakel"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et Absorbe",
				es: "Adherirse y Absorber",
				it: "Avvinghia e Assorbi",
				pt: "Grudar e Absorver",
				de: "Festkleben und Einsaugen"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Soignez 30 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "Cura 30 puntos de daño a este Pokémon. El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Cura questo Pokémon da 30 danni. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Cure 30 de danos deste Pokémon. O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

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
		cardmarket: 273603,
		tcgplayer: 95970
	}
}

export default card
