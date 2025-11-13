import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [586],
	set: Set,

	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		de: "Kronjuwild",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		es: "Sawsbuck",
		'es-mx': "Sawsbuck"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
		de: "Sesokitz",
		it: "Deerling",
		pt: "Deerling",
		es: "Deerling",
		'es-mx': "Deerling"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Push Down",
			fr: "Recul",
			de: "Runterdrücken",
			it: "Spintonare",
			pt: "Rebaixar",
			es: "Oprimir",
			'es-mx': "Oprimir"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			it: "Solarraggio",
			pt: "Raio Solar",
			es: "Rayo Solar",
			'es-mx': "Rayo Solar"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836079
	}
}

export default card