import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Swalot",
		'fr-fr': "Avaltout",
		'es-es': "Swalot",
		'it-it': "Swalot",
		'pt-br': "Swalot",
		'de-de': "Schlukwech"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'es-es': "Gulpin",
		'it-it': "Gulpin",
		'pt-br': "Gulpin",
		'de-de': "Schluppuck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Gas",
				'fr-fr': "Gaz Toxik",
				'es-es': "Gas Venenoso",
				'it-it': "Velenogas",
				'pt-br': "Gás Venenoso",
				'de-de': "Giftwolke"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swallow Up",
				'fr-fr': "Engloutissement",
				'es-es': "Engullir",
				'it-it': "Inghiottire",
				'pt-br': "Engolir por Inteiro",
				'de-de': "Runterschlucken"
			},
			effect: {
				'en-us': "If, before doing damage, your opponent's Active Pokémon has fewer remaining HP than this Pokémon, this attack does 50 more damage.",
				'fr-fr': "Si, avant d'infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan menos PS que a este Pokémon, este ataque hace 50 puntos de daño más.",
				'it-it': "Se, prima di infliggere il danno, il Pokémon attivo del tuo avversario ha meno PS rimanenti di questo Pokémon, questo attacco infligge 50 danni in più.",
				'pt-br': "Se, antes de causar danos, o Pokémon Ativo do seu oponente tiver menos PS restante que este Pokémon, esse ataque causará 50 de danos adicionais.",
				'de-de': "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners weniger verbliebene KP hat als dieses Pokémon, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It swallows anything whole. It sweats toxic fluids from its follicles to douse foes.",
	},

	thirdParty: {
		cardmarket: 281844,
		tcgplayer: 94236
	}
}

export default card
