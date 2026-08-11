import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "kanahei",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Lazy Eating",
				'fr-fr': "Repas Paresseux",
				'es-es': "Comilona Perezosa",
				'it-it': "Spizzicare",
				'pt-br': "Comilança Preguiçosa",
				'de-de': "Faules Mampfen"
			},
			effect: {
				'en-us': "Between turns, heal 10 damage from this Pokémon.",
				'fr-fr': "Entre chaque tour, soignez 10 dégâts à ce Pokémon.",
				'es-es': "Entre turnos, cura 10 puntos de daño a este Pokémon.",
				'it-it': "Tra un turno e l’altro, cura questo Pokémon da 10 danni.",
				'pt-br': "Entre as vezes de jogar, cure 10 pontos de dano deste Pokémon.",
				'de-de': "Heile zwischen den Zügen 10 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Counter",
				'fr-fr': "Forte Réplique",
				'es-es': "Gran Contraataque",
				'it-it': "Gran Contrattacco",
				'pt-br': "Contra-ataque Enorme",
				'de-de': "Großer Konter"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a TAG TEAM, this attack does 120 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est une ESCOUADE, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un equipo de RELEVOS, este ataque hace 120 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon ALLEATI, questo attacco infligge 120 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for uma carta ALIADOS, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein TAG TEAM ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It doesn't do anything other than eat and sleep. When prompted to make a serious effort, though, it apparently displays awesome power.",
	},

	thirdParty: {
		cardmarket: 372446,
		tcgplayer: 189260
	}
}

export default card
