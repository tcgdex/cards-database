import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir",
		en: "Indeedee",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Gain de Temps",
			en: "Replenish Time",
			es: "Hora de Reponerse",
			it: "Ristoratempo",
			pt: "Hora de Reabastecer",
			de: "Verschnaufpause"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
			en: "Heal 30 damage from each of your Pokémon.",
			es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Rafale Psy",
			en: "Psybeam",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Feixe Psíquico",
			de: "Psystrahl"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent’s Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card