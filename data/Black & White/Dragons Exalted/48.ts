import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		es: "Shedinja",
		it: "Shedinja",
		pt: "Shedinja",
		de: "Ninjatom"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Empty Shell",
				fr: "Coquille Vide",
				es: "Concha Vacía",
				it: "Guscio Vuoto",
				pt: "Casca Vazia",
				de: "Leerer Panzer"
			},
			effect: {
				en: "If this Pokémon is Knocked Out, your opponent can’t take any Prize cards for it.",
				fr: "Si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
				es: "Si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por él.",
				it: "Se questo Pokémon viene messo K.O., il tuo avversario non può pescare carte Premio per questo Pokémon.",
				pt: "Se este Pokémon for Nocauteado, seu oponente não poderá receber cards de Prêmio por ele.",
				de: "Wenn dieses Pokémon kampfunfähig wird, darf dein Gegner dafür keine der Preiskarten nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
	],

	retreat: 0
}

export default card
