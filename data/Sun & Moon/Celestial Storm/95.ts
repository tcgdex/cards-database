import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Extend",
				fr: "Prolongement",
				es: "Extender",
				it: "Estensione",
				pt: "Estender",
				de: "Verlängerung"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your turn does not end when you play Steven’s Resolve.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre tour ne se termine pas lorsque vous jouez Résolution de Pierre.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu turno no termina cuando juegues Decisión de Máximo.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo turno non finisce quando giochi Grinta di Rocco.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, a sua vez de jogar não acaba quando você joga Resolução do Steven.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, endet dein Zug nicht, wenn du Troys Entschluss spielst."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Meteor Mash",
				fr: "Poing Météore",
				es: "Puño Meteoro",
				it: "Meteorpugno",
				pt: "Meteoro Esmagador",
				de: "Sternenhieb"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Meteorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Meteoro Esmagador deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

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
	retreat: 4,



}

export default card
