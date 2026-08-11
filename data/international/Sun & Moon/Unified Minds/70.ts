import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Xurkitree",
		'fr-fr': "Câblifère",
		'es-es': "Xurkitree",
		'it-it': "Xurkitree",
		'pt-br': "Xurkitree",
		'de-de': "Voltriant"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		796,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Three Mirrors",
				'fr-fr': "Triple Reflet",
				'es-es': "Tres Espejos",
				'it-it': "Tre Specchi",
				'pt-br': "Três Espelhos",
				'de-de': "Drei Spiegel"
			},
			effect: {
				'en-us': "If your opponent has exactly 3 Prize cards remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 3 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si a tu rival le quedan exactamente 3 cartas de Premio, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il tuo avversario ha esattamente tre carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o seu oponente tiver exatamente 3 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner genau 3 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Signal Beam",
				'fr-fr': "Rayon Signal",
				'es-es': "Doble Rayo",
				'it-it': "Segnoraggio",
				'pt-br': "Feixe Sinalizador",
				'de-de': "Ampelleuchte"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
	},

	thirdParty: {
		cardmarket: 388172,
		tcgplayer: 194996
	}
}

export default card
