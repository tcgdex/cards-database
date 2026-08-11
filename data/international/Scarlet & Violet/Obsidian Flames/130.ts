import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		'fr-fr': "Noctali",
		'en-us': "Umbreon",
		'es-es': "Umbreon",
		'it-it': "Umbreon",
		'pt-br': "Umbreon",
		'de-de': "Nachtara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Feinte",
			'en-us': "Feint Attack",
			'es-es': "Finta",
			'it-it': "Finta",
			'pt-br': "Ataque Dissimulado",
			'de-de': "Finte"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur ce Pokémon.",
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on that Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en ese Pokémon.",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente su quel Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza, Resistência ou por quaisquer outros efeitos naquele Pokémon.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf jenem Pokémon nicht verändert."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Lame Fuligineuse",
			'en-us': "Pitch-Black Blade",
			'es-es': "Tajo Oscuridad",
			'it-it': "Lama Buiopesto",
			'pt-br': "Lâmina do Breu",
			'de-de': "Pechschwarze Klinge"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When exposed to the moon's aura, the rings on its body glow faintly and it gains a mysterious power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725210,
				tcgplayer: 509888,
				cardtrader: 255815
			}
		},
		{
			type: 'normal',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 727071
			}
		},
		{
			type: 'normal',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 727070
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725210,
				tcgplayer: 509888,
				cardtrader: 255815
			}
		},
		{
			type: 'reverse',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 742043
			}
		},
	],

	illustrator: "rika",

	
}

export default card
