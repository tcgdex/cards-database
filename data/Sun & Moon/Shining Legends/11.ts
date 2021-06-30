import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High-Pressure Heat",
				fr: "Chaleur Sous Pression",
				es: "Calor de Alta Presión",
				it: "Calore Pressurizzato",
				pt: "Calor de Alta Pressão",
				de: "Hochdruckhitze"
			},
			effect: {
				en: "During your next turn, this Pokémon’s High-Pressure Heat attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Chaleur Sous Pression de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Calor de Alta Presión de este Pokémon hace 50 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Calore Pressurizzato di questo Pokémon infligge 50 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Calor de Alta Pressão deste Pokémon causará 50 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Hochdruckhitze dieses Pokémon 50 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
