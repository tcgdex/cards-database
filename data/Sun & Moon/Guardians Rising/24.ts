import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				es: "Picotazo Veneno",
				it: "Velenospina",
				pt: "Ferrão Venenoso",
				de: "Giftstachel"
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seething Tentacles",
				fr: "Tentacules Grouillants",
				es: "Tentáculos Furiosos",
				it: "Tentacoli Sfrenati",
				pt: "Tentáculos Furiosos",
				de: "Wallende Tentakel"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
