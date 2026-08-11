import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		739,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Blast",
				'fr-fr': "Explosion de Poings",
				'es-es': "Explosión Nudillo",
				'it-it': "Pugno Bomba",
				'pt-br': "Punho Explosivo",
				'de-de': "Knöchelbomber"
			},
			effect: {
				'en-us': "If you have more Prize cards remaining than your opponent, this attack does 60 more damage.",
				'fr-fr': "S’il vous reste plus de cartes Récompense qu’à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il numero di carte Premio che ti restano è superiore a quello del tuo avversario, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its hard pincers are well suited to both offense and defense. Fights between two Crabrawler are like boxing matches.",
	},

	thirdParty: {
		cardmarket: 372395,
		tcgplayer: 189203
	}
}

export default card
