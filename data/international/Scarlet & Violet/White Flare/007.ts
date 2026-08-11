import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [586],
	set: Set,

	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'de-de': "Kronjuwild",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'es-es': "Sawsbuck",
		'es-mx': "Sawsbuck"
	},

	illustrator: "Narano",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'de-de': "Sesokitz",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'es-es': "Deerling",
		'es-mx': "Deerling"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'de-de': "Runterdrücken",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'es-es': "Oprimir",
			'es-mx': "Oprimir"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'de-de': "Solarstrahl",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'es-es': "Rayo Solar",
			'es-mx': "Rayo Solar"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835913,
				tcgplayer: 642122
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835913,
				tcgplayer: 642122
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836503,
				tcgplayer: 642367
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836504,
				tcgplayer: 642295
			}
		},
	],
}

export default card
