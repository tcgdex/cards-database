import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		es: "Stantler",
		it: "Stantler",
		pt: "Stantler",
		de: "Damhirplex"
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		234,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mystifying Horns",
				fr: "Mysti-Cornes",
				es: "Cuernos Desconcertantes",
				it: "Falsecorna",
				pt: "Chifres da Mistificação",
				de: "Mystik-Hörner"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Charge",
				fr: "Grande Charge",
				es: "Gran Carga",
				it: "Grancarica",
				pt: "Carga Grande",
				de: "Großangriff"
			},
			effect: {
				en: "If you have any Mega Evolution Pokémon on your Bench, this attack does 50 more damage.",
				fr: "Si vous avez un Pokémon Méga-Évolution sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si tienes algún Pokémon Megaevolución en tu Banca, este ataque hace 50 puntos de daño más.",
				it: "Se hai dei Pokémon Megaevoluzione in panchina, questo attacco infligge 50 danni in più.",
				pt: "Se você tiver algum Pokémon de Megaevolução no Banco, este ataque causará 50 de danos adicionais.",
				de: "Wenn du mindestens 1 Mega-Entwicklungs-Pokémon auf deiner Bank hast, fügt dieser Angriff 50 weitere Schadenspunkte zu."
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

	retreat: 1,



}

export default card
