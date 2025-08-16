import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		pt: "Golisopod",
		de: "Tectass"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "First Impression",
			fr: "Escarmouche",
			es: "Escaramuza",
			it: "Schermaglia",
			pt: "Primeira Impressão",
			de: "Überrumpler"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664565,
		tcgplayer: 274459
	}
}

export default card
