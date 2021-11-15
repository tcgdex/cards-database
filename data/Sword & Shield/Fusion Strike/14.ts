import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		en: "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane."
	},

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Ninja Tornado",
			fr: "Tornade Ninja",
			es: "Tornado Ninja",
			it: "Tornado Ninja",
			de: "Ninjatornado"
		},

		damage: 120,

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack can be used for Grass.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque peut être utilisée pour Grass.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque se puede usar por 1 Energía Grass.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, il costo di questo attacco è Grass.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, kann diese Attacke für Grass eingesetzt werden."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card