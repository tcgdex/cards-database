import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa",
		de: "Hoopa"
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		720,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hyperspace Punch",
				fr: "Poing Hyperespace",
				es: "Puño Dimensional",
				it: "Pugnodimensionale",
				pt: "Soco de Hiperespaço",
				de: "Dimensionshieb"
			},
			effect: {
				en: "This attack does 20 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 de danos a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 2 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Portal Strike",
				fr: "Frappe Dimensionnelle",
				es: "Portal Impacto",
				it: "Colpoportale",
				pt: "Ataque ao Portal",
				de: "Portalhieb"
			},
			effect: {
				en: "This Pokémon can't use Portal Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Frappe Dimensionnelle pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Portal Impacto durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoportale.",
				pt: "Este Pokémon não poderá usar Ataque ao Portal durante sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Portalhieb während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
