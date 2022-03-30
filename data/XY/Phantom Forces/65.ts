import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Aegislash EX",
		fr: "Exagide EX",
		es: "Aegislash EX",
		it: "Aegislash EX",
		pt: "Aegislash EX",
		de: "Durengard EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mighty Shield",
				fr: "Bouclier Sublime",
				es: "Escudo Poderoso",
				it: "Scudoforza",
				pt: "Escudo Poderoso",
				de: "Schildmacht"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from each of your opponent's Pokémon that has Special Energy attached to it.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de chacun des Pokémon de votre adversaire auquel de l'Énergie spéciale est attachée.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de cada uno de los Pokémon de tu rival que tenga Energía Especial unida a él.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che abbiano delle Energie speciali assegnate.",
				pt: "Previne todos os danos causados a este Pokémon por ataques de cada um dos Pokémon do seu oponente com Energia Especial ligada a ele.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Angriffe von Pokémon deines Gegners, an die Spezial-Energie angelegt ist, zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash Blast",
				fr: "Rafale d'Entailles",
				es: "Explosión Cortante",
				it: "Lacerabomba",
				pt: "Golpe Explosivo",
				de: "Klingenstoß"
			},
			effect: {
				en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Metal unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia Metal ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Metal-Energie zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
