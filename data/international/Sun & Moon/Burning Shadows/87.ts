import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'pt-br': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Raid",
				'fr-fr': "Raid Obscur",
				'es-es': "Asalto Siniestro",
				'it-it': "Raid Oscuro",
				'pt-br': "Batida Obscura",
				'de-de': "Dunkler Raubzug"
			},
			effect: {
				'en-us': "If your opponent has already used their GX attack, this attack does 80 more damage.",
				'fr-fr': "Si votre adversaire a déjà utilisé son attaque GX, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tu rival ya ha usado su ataque GX, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il tuo avversario ha già usato il suo attacco GX, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o seu oponente já tiver usado o ataque GX dele(a), este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner seine GX-Attacke bereits eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
	},

	thirdParty: {
		cardmarket: 299489,
		tcgplayer: 138577
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
