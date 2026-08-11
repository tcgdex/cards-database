import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Using its roots as a nervous system, it controls the trees in the forest. It's kind to the Pokémon that reside in its body.",
	},


	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'es-mx': "Trevenant",
		'de-de': "Trombork",
		'it-it': "Trevenant",
		'pt-br': "Trevenant"
	},

	illustrator: "Uninori",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [709],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Phantump"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Cursed Roots",
			'fr-fr': "Racines Maudites",
			'es-es': "Raíces Malditas",
			'es-mx': "Raíces Malditas",
			'de-de': "Verfluchte Wurzeln",
			'it-it': "Radici Maledette",
			'pt-br': "Raízes Amaldiçoadas"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			'en-us': "During your opponent's next turn, Energy can't be attached from your opponent's hand to the Defending Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, aucune Énergie ne peut être attachée de la main de votre adversaire au Pokémon Défenseur.",
			'es-es': "Durante el próximo turno de tu rival, no se puede unir Energía de la mano de tu rival al Pokémon Defensor.",
			'es-mx': "Durante el próximo turno de tu rival, las Energías no se pueden unir de la mano de tu rival al Pokémon Defensor.",
			'de-de': "Während des nächsten Zuges deines Gegners kann keine Energie aus der Hand deines Gegners an das Verteidigende Pokémon angelegt werden.",
			'it-it': "Durante il prossimo turno del tuo avversario, nessuna Energia può essere assegnata dalla mano del tuo avversario al Pokémon difensore.",
			'pt-br': "Durante o próximo turno do seu oponente, Energias não poderão ser ligadas da mão do seu oponente ao Pokémon Defensor."
		}
	}, {
		name: {
			'en-us': "Overwhelming Pain",
			'fr-fr': "Douleur Accablante",
			'es-es': "Dolor Abrumador",
			'es-mx': "Dolor Abrumador",
			'de-de': "Überwältigende Schmerzen",
			'it-it': "Dolore Incontenibile",
			'pt-br': "Dor Insuportável"
		},

		cost: ["Psychic", "Psychic"],
		damage: "60+",

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en cada uno de los Pokémon de tu rival.",
			'es-mx': "Este ataque hace 10 puntos de daño más por cada contador de daño en cada uno de los Pokémon de tu rival.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon deines Gegners 10 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os Pokémon do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886431,
				tcgplayer: 693556
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 886431,
				tcgplayer: 693556
			}
		},
	],
}

export default card
