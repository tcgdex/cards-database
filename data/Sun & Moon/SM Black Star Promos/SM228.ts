import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		en: "Armored Mewtwo",
		fr: "Armored Mewtwo",
		es: "Armored Mewtwo",
		it: "Armored Mewtwo",
		pt: "Armored Mewtwo",
		de: "Armored Mewtwo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Psychic Raid",
			fr: "Raid Psy",
			es: "Incursión Psíquica",
			it: "Raid Psichico",
			pt: "Incursão Psíquica",
			de: "Psycho-Raubzug"
		},

		damage: 130,

		effect: {
			en: "This Pokémon can’t attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			es: "Este Pokémon no puede atacar durante tu próximo turno.",
			it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
			pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
			de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
		},

		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card