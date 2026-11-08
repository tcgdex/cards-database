import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
		'de-de': "Terribark",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'es-es': "Herdier",
		'es-mx': "Herdier"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'de-de': "Yorkleff",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'es-es': "Lillipup",
		'es-mx': "Lillipup"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Roar",
			'fr-fr': "Hurlement",
			'de-de': "Brüller",
			'it-it': "Boato",
			'pt-br': "Rugido",
			'es-es': "Rugido",
			'es-mx': "Rugido"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'de-de': "Sprungangriff",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'es-es': "Arremeter",
			'es-mx': "Embestida Brusca"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836038,
				tcgplayer: 642188
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836038,
				tcgplayer: 642188
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836634,
				tcgplayer: 642429
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836635,
				tcgplayer: 642357
			}
		},
	],
}

export default card
