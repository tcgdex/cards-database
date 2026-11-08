import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shining Lugia",
		'fr-fr': "Lugia Brillant",
		'es-es': "Lugia Luminoso",
		'it-it': "Lugia iridescente",
		'pt-br': "Lugia Luminescente",
		'de-de': "Schimmerndes Lugia"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Argent Wing",
				'fr-fr': "Aile Argentée",
				'es-es': "Ala Argento",
				'it-it': "Ala Argentea",
				'pt-br': "Asa Argento",
				'de-de': "Silberner Flügel"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has an Ability, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha un’abilità, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners eine Fähigkeit hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aero Force",
				'fr-fr': "Force Aérienne",
				'es-es': "Fuerza Aérea",
				'it-it': "Forza Aerea",
				'pt-br': "Força Aérea",
				'de-de': "Aero-Kraft"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm.",
	},
}

export default card
