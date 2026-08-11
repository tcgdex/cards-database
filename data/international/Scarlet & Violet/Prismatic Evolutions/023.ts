import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		'en-us': "Vaporeon ex",
		'fr-fr': "Aquali-ex",
		'es-es': "Vaporeon ex",
		'pt-br': "Vaporeon ex",
		'it-it': "Vaporeon-ex",
		'de-de': "Aquana-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Severe Squall",
			'fr-fr': "Rafale Violente",
			'es-es': "Ráfaga Inclemente",
			'pt-br': "Ventania Intensa",
			'it-it': "Burrasca Violenta",
			'de-de': "Starker Schwall"
		},

		effect: {
			'en-us': "This attack does 60 damage to each of your opponent's Pokémon ex. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Cette attaque inflige 60 dégâts à chacun des Pokémon-ex de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'es-es': "Este ataque hace 60 puntos de daño a cada uno de los Pokémon ex de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'pt-br': "Este ataque causa 60 pontos de dano a cada um dos Pokémon ex do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'it-it': "Questo attacco infligge 60 danni a ciascuno dei Pokémon-ex del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'de-de': "Diese Attacke fügt jedem Pokémon-ex deines Gegners 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		}
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			'en-us': "Aquamarine",
			'fr-fr': "Aigue-Marine",
			'es-es': "Aguamarina",
			'pt-br': "Água-marinha",
			'it-it': "Acquamarina",
			'de-de': "Aquamarin"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805412,
				tcgplayer: 610378
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 810424,
			}
		},
	],
}

export default card
