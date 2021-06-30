import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Shining Lugia",
		fr: "Lugia Brillant",
		es: "Lugia Luminoso",
		it: "Lugia iridescente",
		pt: "Lugia Luminescente",
		de: "Schimmerndes Lugia"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
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
				en: "Argent Wing",
				fr: "Aile Argentée",
				es: "Ala Argento",
				it: "Ala Argentea",
				pt: "Asa Argento",
				de: "Silberner Flügel"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has an Ability, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha un’abilità, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners eine Fähigkeit hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
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
				en: "Aero Force",
				fr: "Force Aérienne",
				es: "Fuerza Aérea",
				it: "Forza Aerea",
				pt: "Força Aérea",
				de: "Aero-Kraft"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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



}

export default card
