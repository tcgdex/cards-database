import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Indeedee",
		fr: "Wimessir",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Replenish Time",
				fr: "Gain de Temps",
				es: "Hora de Reponerse",
				it: "Ristoratempo",
				pt: "Hora de Reabastecer",
				de: "Verschnaufpause"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				es: "Psicorrayo",
				it: "Psicoraggio",
				pt: "Feixe Psíquico",
				de: "Psystrahl"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 100,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
