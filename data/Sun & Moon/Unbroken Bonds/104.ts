import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
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
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
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
				en: "Knuckle Blast",
				fr: "Explosion de Poings",
				es: "Explosión Nudillo",
				it: "Pugno Bomba",
				pt: "Punho Explosivo",
				de: "Knöchelbomber"
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this attack does 60 more damage.",
				fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 60 puntos de daño más.",
				it: "Se il numero di carte Premio che ti restano è superiore a quello del tuo avversario, questo attacco infligge 60 danni in più.",
				pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 60 Schadenspunkte mehr zu."
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



}

export default card
