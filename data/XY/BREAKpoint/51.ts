import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Goodnight, Babies",
				fr: "Bonne Nuit Mes Petits",
				es: "Buenas Noches, Chicos",
				it: "Notte, ragazzi",
				pt: "Bons sonhos, Crianças",
				de: "Schlaf, Kindlein, schlaf!"
			},
			effect: {
				en: "Once during your turn (before your attack), you may leave both Active Pokémon Asleep.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser les deux Pokémon Actifs Endormis.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes dejar a ambos Pokémon Activos Dormidos.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lasciare entrambi i Pokémon attivi addormentati.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode deixar ambos os Pokémon Ativos Adormecidos.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du beide Aktiven Pokémon schlafen lassen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud'Boul",
				es: "Cabezazo Zen",
				it: "Cozzata Zen",
				pt: "Cabeçada Zen",
				de: "Zen-Kopfstoß"
			},

			damage: 50,

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
