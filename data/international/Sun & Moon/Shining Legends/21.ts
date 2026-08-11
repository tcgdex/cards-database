import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish",
		'es-es': "Qwilfish",
		'it-it': "Qwilfish",
		'pt-br': "Qwilfish",
		'de-de': "Baldorfish"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'es-es': "Picotazo Veneno",
				'it-it': "Velenospina",
				'pt-br': "Ferrão Venenoso",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Shocking Sting",
				'fr-fr': "Dard Choquant",
				'es-es': "Picotazo Impactante",
				'it-it': "Spinashock",
				'pt-br': "Ferrão Chocante",
				'de-de': "Schockstachel"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To fire its poison spikes, it must inflate its body by drinking over 2.6 gallons of water all at once.",
	},

	thirdParty: {
		cardmarket: 302159,
		tcgplayer: 146674
	}
}

export default card
