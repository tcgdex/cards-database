import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		en: "Revavroom ex",
		fr: "Vrombotor-ex",
		es: "Revavroom ex",
		it: "Revavroom-ex",
		pt: "Revavroom ex",
		de: "Knattatox-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Accelerator Flash",
			fr: "Flash Accélérateur",
			es: "Destello Acelerador",
			it: "Acceleratore Flash",
			pt: "Clarão do Acelerador",
			de: "Turbozündung"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Shattering Speed",
			fr: "Vitesse Fracassante",
			es: "Velocidad Demoledora",
			it: "Velocità Devastante",
			pt: "Velocidade Desintegradora",
			de: "Zerlegendes Tempo"
		},

		effect: {
			en: "Discard this Pokémon and all attached cards.",
			fr: "Défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Descarta este Pokémon y todas las cartas unidas a él.",
			it: "Scarta questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Descarte este Pokémon e todas as cartas ligadas a ele.",
			de: "Lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel."
		},

		damage: 250
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Mochizuki",

	thirdParty: {
		cardmarket: 780976
	}
}

export default card
