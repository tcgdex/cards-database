import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [617],
	set: Set,

	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		'en-us': "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane."
	},

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Ninja Tornado",
			'fr-fr': "Tornade Ninja",
			'es-es': "Tornado Ninja",
			'it-it': "Tornado Ninja",
			'de-de': "Ninjatornado",
			'pt-br': "Tornado Ninja"
		},

		damage: 120,

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack can be used for {G}.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque peut être utilisée pour {G}.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque se puede usar por 1 Energía {G}.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, il costo di questo attacco è {G}.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, kann diese Attacke für {G} eingesetzt werden.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque poderá ser usado por {G}."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582053,
				tcgplayer: 253090
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582053,
				tcgplayer: 253090
			}
		},
	],
}

export default card
