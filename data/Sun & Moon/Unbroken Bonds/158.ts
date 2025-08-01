import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
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
				en: "Lazy Eating",
				fr: "Repas Paresseux",
				es: "Comilona Perezosa",
				it: "Spizzicare",
				pt: "Comilança Preguiçosa",
				de: "Faules Mampfen"
			},
			effect: {
				en: "Between turns, heal 10 damage from this Pokémon.",
				fr: "Entre chaque tour, soignez 10 dégâts à ce Pokémon.",
				es: "Entre turnos, cura 10 puntos de daño a este Pokémon.",
				it: "Tra un turno e l’altro, cura questo Pokémon da 10 danni.",
				pt: "Entre as vezes de jogar, cure 10 pontos de dano deste Pokémon.",
				de: "Heile zwischen den Zügen 10 Schadenspunkte bei diesem Pokémon."
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
				en: "Big Counter",
				fr: "Forte Réplique",
				es: "Gran Contraataque",
				it: "Gran Contrattacco",
				pt: "Contra-ataque Enorme",
				de: "Großer Konter"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a TAG TEAM, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est une ESCOUADE, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un equipo de RELEVOS, este ataque hace 120 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon ALLEATI, questo attacco infligge 120 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for uma carta ALIADOS, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein TAG TEAM ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 372446
	}
}

export default card
