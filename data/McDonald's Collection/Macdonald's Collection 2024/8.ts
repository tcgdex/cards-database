import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1007],

	hp: 130,

	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				en: "Raging Claws",
				fr: "Griffes Enragées",
				es: "Garras Rabiosas",
				it: "Artigli Furiosi",
				pt: "Garras Furiosas",
				de: "Rasende Klauen"
			},
			damage: "20+",
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				en: "Wild Impact",
				fr: "Impact Sauvage",
				es: "Impacto Salvaje",
				it: "Impatto Selvaggio",
				pt: "Impacto Selvagem",
				de: "Wildeinschlag"
			},
			damage: 130,
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

