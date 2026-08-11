import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		'en-us': "Espathra",
		'fr-fr': "Cléopsytra",
		'es-es': "Espathra",
		'it-it': "Espathra",
		'pt-br': "Espathra",
		'de-de': "Psiopatra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Eye Strength",
			'fr-fr': "Œil Inflexible",
			'es-es': "Fuerza Ocular",
			'it-it': "Occhioforza",
			'pt-br': "Olhar Poderoso",
			'de-de': "Augenkraft"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 0,
	regulationMark: "G",
	illustrator: "Hitoshi Ariga",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It immobilizes opponents by bathing them in psychic power from its large eyes. Despite its appearance, it has a vicious temperament.",
	},

	thirdParty: {
        cardmarket: 702399,
        tcgplayer: 487978
    }
}

export default card