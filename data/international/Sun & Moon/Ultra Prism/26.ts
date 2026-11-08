import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
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
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Panic Poison",
				'fr-fr': "Poison Panique",
				'es-es': "Pánico Venenoso",
				'it-it': "Velenostress",
				'pt-br': "Veneno do Pânico",
				'de-de': "Panikgift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Hunter’s Nails",
				'fr-fr': "Griffes du Chasseur",
				'es-es': "Uñas Depredadoras",
				'it-it': "Unghie Predatrici",
				'pt-br': "Unhas de Caçador",
				'de-de': "Meuchelklaue"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "Filled with pheromones, its poisonous gas can be diluted to use in the production of luscious perfumes.",
	},

	thirdParty: {
		cardmarket: 315957,
		tcgplayer: 157643
	}
}

export default card
