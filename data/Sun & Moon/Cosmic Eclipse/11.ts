import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		es: "Cradily",
		it: "Cradily",
		pt: "Cradily",
		de: "Wielie"
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swaying Strangle",
				fr: "Balancement Enserrant",
				es: "Estrangulación Oscilante",
				it: "Stretta Ondulante",
				pt: "Sufocamento Oscilante",
				de: "Wiegender Würger"
			},
			effect: {
				en: "Your opponent’s Pokémon that are affected by Special Conditions can’t retreat.",
				fr: "Les Pokémon de votre adversaire qui sont affectés pas un État Spécial ne peuvent pas battre en retraite.",
				es: "Los Pokémon de tu rival que estén afectados por Condiciones Especiales no pueden retirarse.",
				it: "I Pokémon del tuo avversario influenzati da condizioni speciali non possono ritirarsi.",
				pt: "Os Pokémon do seu oponente que estiverem afetados por Condições Especiais não poderão recuar.",
				de: "Die Pokémon deines Gegners, die von Speziellen Zuständen betroffen sind, können sich nicht zurückziehen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Tentacles",
				fr: "Tentacules Empoisonnés",
				es: "Tentáculos Venenosos",
				it: "Tentacoli Velenosi",
				pt: "Tentáculos Venenosos",
				de: "Giftige Tentakel"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
