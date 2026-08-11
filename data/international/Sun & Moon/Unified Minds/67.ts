import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Trap Bolt",
				'fr-fr': "Piège Foudre",
				'es-es': "Rayo Trampa",
				'it-it': "Lampotrappola",
				'pt-br': "Armadilha de Raios",
				'de-de': "Fallenschlag"
			},
			effect: {
				'en-us': "If, before doing damage, your opponent’s Active Pokémon has more remaining HP than this Pokémon, this attack does 30 more damage.",
				'fr-fr': "Si, avant d’infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan más PS que a este Pokémon, este ataque hace 30 puntos de daño más.",
				'it-it': "Se, prima di infliggere danni, il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 30 danni in più.",
				'pt-br': "Se, antes de causar dano, o Pokémon Ativo do seu oponente tiver mais PS restante do que este Pokémon, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners mehr verbleibende KP als dieses Pokémon hat, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

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

	retreat: 1,

	description: {
		'en-us': "Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
	},

	thirdParty: {
		cardmarket: 388157,
		tcgplayer: 194993
	}
}

export default card
