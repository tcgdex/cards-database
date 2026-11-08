import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Tomb",
			'fr-fr': "Tomberoche",
			'es-es': "Tumba Rocas",
			'it-it': "Rocciotomba",
			'pt-br': "Tumba de Rochas",
			'de-de': "Felsgrab"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Raging Swing",
			'fr-fr': "Frappe Acharnée",
			'es-es': "Sacudida Rabiosa",
			'it-it': "Oscillafuria",
			'pt-br': "Giro Feroz",
			'de-de': "Wütendes Winden"
		},

		effect: {
			'en-us': "This attack does 50 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 50 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665666,
				tcgplayer: 276981
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665666,
				tcgplayer: 276981
			}
		},
	],
}

export default card
