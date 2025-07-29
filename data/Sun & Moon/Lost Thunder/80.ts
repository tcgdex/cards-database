import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		pt: "Pachirisu",
		de: "Pachirisu"
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
				en: "Overshort",
				fr: "Surcircuiter",
				es: "Sobredescarga",
				it: "Sovraccarico",
				pt: "Sobrecurto",
				de: "Voller Kurzschluss"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon. If you discarded a Pokémon Tool card in this way, this attack does 40 more damage, and your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival. Si has descartado alguna carta de Herramienta Pokémon de esta manera, este ataque hace 40 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario. Se scarti una carta Oggetto Pokémon in questo modo, questo attacco infligge 40 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma carta de Ferramenta Pokémon desta forma, este ataque causará 40 pontos de dano a mais e o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, fügt diese Attacke 40 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
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

	thirdParty: {
		cardmarket: 365718
	}
}

export default card
