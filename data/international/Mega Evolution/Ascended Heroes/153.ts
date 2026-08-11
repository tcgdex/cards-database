import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'es-mx': "Rayquaza",
		'de-de': "Rayquaza",
		'it-it': "Rayquaza",
		'pt-br': "Rayquaza"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [384],
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Breakthrough Assault",
			'fr-fr': "Assaut Percée",
			'es-es': "Asalto Impulsor",
			'es-mx': "Asalto Rompelímites",
			'de-de': "Durchbruch-Angriff",
			'it-it': "Assalto Breccia",
			'pt-br': "Ofensiva Decisiva"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo durante este turno, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 90 pontos de dano a mais."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Lightning", "Colorless"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'es-mx': "Garra Dragón",
			'de-de': "Drachenklaue",
			'it-it': "Dragartigli",
			'pt-br': "Garra de Dragão"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and cannot be seen from the ground.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869764,
			tcgplayer: 675965
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870374,
			tcgplayer: 676971
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870373,
			tcgplayer: 677111
		}
	},
],
}

export default card
