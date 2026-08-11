import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'en-us': "Revavroom ex",
		'fr-fr': "Vrombotor-ex",
		'es-es': "Revavroom ex",
		'it-it': "Revavroom-ex",
		'pt-br': "Revavroom ex",
		'de-de': "Knattatox-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Accelerator Flash",
			'fr-fr': "Flash Accélérateur",
			'es-es': "Destello Acelerador",
			'it-it': "Acceleratore Flash",
			'pt-br': "Clarão do Acelerador",
			'de-de': "Turbozündung"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Shattering Speed",
			'fr-fr': "Vitesse Fracassante",
			'es-es': "Velocidad Demoledora",
			'it-it': "Velocità Devastante",
			'pt-br': "Velocidade Desintegradora",
			'de-de': "Zerlegendes Tempo"
		},

		effect: {
			'en-us': "Discard this Pokémon and all attached cards.",
			'fr-fr': "Défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Descarta este Pokémon y todas las cartas unidas a él.",
			'it-it': "Scarta questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Descarte este Pokémon e todas as cartas ligadas a ele.",
			'de-de': "Lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780905,
				tcgplayer: 560325
			}
		},
	],
}

export default card
