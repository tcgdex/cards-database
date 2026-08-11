import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

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
				'en-us': "Overshort",
				'fr-fr': "Surcircuiter",
				'es-es': "Sobredescarga",
				'it-it': "Sovraccarico",
				'pt-br': "Sobrecurto",
				'de-de': "Voller Kurzschluss"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon. If you discarded a Pokémon Tool card in this way, this attack does 40 more damage, and your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival. Si has descartado alguna carta de Herramienta Pokémon de esta manera, este ataque hace 40 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario. Se scarti una carta Oggetto Pokémon in questo modo, questo attacco infligge 40 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma carta de Ferramenta Pokémon desta forma, este ataque causará 40 pontos de dano a mais e o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, fügt diese Attacke 40 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},
			damage: "20+",

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
		'en-us': "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
	},

	thirdParty: {
		cardmarket: 365718,
		tcgplayer: 178889
	}
}

export default card
