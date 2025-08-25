import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
		es: "Tapu Lele",
		it: "Tapu Lele",
		pt: "Tapu Lele",
		de: "Kapu-Fala"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		786,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Psywave",
				fr: "Vague Psy",
				es: "Psicoonda",
				it: "Psiconda",
				pt: "Onda Psíquica",
				de: "Psywelle"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Swap",
				fr: "Permutation Magique",
				es: "Cambio Mágico",
				it: "Magibaratto",
				pt: "Troca Encantada",
				de: "Magischer Austausch"
			},
			effect: {
				en: "Move any number of damage counters on your opponent’s Pokémon to their other Pokémon in any way you like.",
				fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers ses autres Pokémon, de la manière que vous voulez.",
				es: "Mueve cualquier cantidad de contadores de daño de los Pokémon de tu rival a sus otros Pokémon de la manera que desees.",
				it: "Distribuisci a piacimento i segnalini danno presenti sui Pokémon del tuo avversario.",
				pt: "Mova qualquer número de contadores de dano dos Pokémon do seu oponente para os outros Pokémon dele(a) como desejar.",
				de: "Verschiebe beliebig viele Schadensmarken auf den Pokémon deines Gegners beliebig auf seine anderen Pokémon."
			},

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

	thirdParty: {
		cardmarket: 316020,
		tcgplayer: 157711
	}
}

export default card
