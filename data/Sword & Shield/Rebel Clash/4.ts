import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse Lames",
				es: "Danza Espada",
				it: "Danzaspada",
				pt: "Dança das Espadas",
				de: "Schwerttanz"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Blinding Scythe attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Pulvérisation Aveuglante de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Guadaña Cegadora de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Falceaccecante di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante o seu próximo turno, o ataque Foice Ofuscante deste Pokémon causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Blendende Sense dieses Pokémon 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blinding Scythe",
				fr: "Pulvérisation Aveuglante",
				es: "Guadaña Cegadora",
				it: "Falceaccecante",
				pt: "Foice Ofuscante",
				de: "Blendende Sense"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
