import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [384],

	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		es: "Rayquaza",
		'es-mx': "Rayquaza",
		de: "Rayquaza",
		it: "Rayquaza",
		pt: "Rayquaza"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Breakthrough Assault",
			fr: "Assaut Percée",
			es: "Asalto Impulsor",
			'es-mx': "Asalto Rompelímites",
			de: "Durchbruch-Angriff",
			it: "Assalto Breccia",
			pt: "Ofensiva Decisiva"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si este Pokémon se movió de tu Banca al Puesto Activo durante este turno, este ataque hace 90 puntos de daño más.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 90 pontos de dano a mais."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Lightning", "Colorless"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			'es-mx': "Garra Dragón",
			de: "Drachenklaue",
			it: "Dragartigli",
			pt: "Garra de Dragão"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675965,
		cardmarket: 869764
	}
}

export default card