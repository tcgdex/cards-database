import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Curly Ribbon",
				fr: "Ruban Bouclé",
				es: "Cinta Rizo",
				it: "Arriccianastro",
				pt: "Fita Anelada",
				de: "Ringelschleife"
			},
			effect: {
				en: "Move an Energy attached to your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
				es: "Mueve 1 Energía unida al Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				it: "Sposta un'Energia assegnata al Pokémon attivo del tuo avversario su uno dei Pokémon nella sua panchina.",
				pt: "Mova um card de Energia ligado ao Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco desse oponente.",
				de: "Verschiebe 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
				es: "Eco Voz",
				it: "Echeggiavoce",
				pt: "Voz Ecoante",
				de: "Widerhall"
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 50 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Echeggiavoce di questo Pokémon infligge 50 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, o ataque Voz Ecoante deste Pokémon causará 50 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
