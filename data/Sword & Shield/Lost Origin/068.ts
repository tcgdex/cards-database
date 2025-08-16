import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Alluring Dance",
			fr: "Danse Envoûtante",
			es: "Danza Seductora",
			it: "Danza Seducente",
			pt: "Dança Cativante",
			de: "Verführerischer Tanz"
		},

		effect: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
			pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso.",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674078,
		tcgplayer: 283943
	}
}

export default card