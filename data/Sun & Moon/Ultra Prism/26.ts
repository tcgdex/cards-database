import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Panic Poison",
				fr: "Poison Panique",
				es: "Pánico Venenoso",
				it: "Velenostress",
				pt: "Veneno do Pânico",
				de: "Panikgift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Hunter’s Nails",
				fr: "Griffes du Chasseur",
				es: "Uñas Depredadoras",
				it: "Unghie Predatrici",
				pt: "Unhas de Caçador",
				de: "Meuchelklaue"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
