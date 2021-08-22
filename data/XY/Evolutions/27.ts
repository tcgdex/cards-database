import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "M Slowbro EX",
		fr: "M-Flagadoss EX",
		es: "M-Slowbro EX",
		it: "M Slowbro EX",
		pt: "M-Slowbro EX",
		de: "M-Lahmus EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 220,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowbro-EX",
		fr: "Flagadoss-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Loll Roll Spin",
				fr: "Tournicote",
				es: "Giro Repantingado",
				it: "Giravolta Maldestra",
				pt: "Giro Desastrado",
				de: "Träge Wirbelrolle"
			},
			effect: {
				en: "This Pokémon is now Confused. During your next turn, this Pokémon’s Loll Roll Spin attack does 100 more damage (before applying Weakness and Resistance).",
				fr: "Ce Pokémon est maintenant Confus. Pendant votre prochain tour, l’attaque Tournicote de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Este Pokémon pasa a estar Confundido. Durante tu próximo turno, el ataque Giro Repantingado de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon viene confuso. Durante il tuo prossimo turno, l’attacco Giravolta Maldestra di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Este Pokémon agora está Confuso. Durante sua próxima vez de jogar, o ataque Giro Desastrado deste Pokémon causará 100 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Dieses Pokémon ist jetzt verwirrt. Während deines nächsten Zuges fügt die Attacke Träge Wirbelrolle dieses Pokémon 100 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
