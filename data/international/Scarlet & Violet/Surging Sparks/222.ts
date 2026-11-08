import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [330],
	set: Set,

	name: {
		'en-us': "Flygon ex",
		'fr-fr': "Libégon-ex",
		'es-es': "Flygon ex",
		'it-it': "Flygon-ex",
		'pt-br': "Flygon ex",
		'de-de': "Libelldra-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Reversing Storm",
			'fr-fr': "Tempête Inversion",
			'es-es': "Tormenta Inversión",
			'it-it': "Tempesta d'Inversione",
			'pt-br': "Tempestade Reversa",
			'de-de': "Umkehrsturm"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 130
	}, {
		cost: ["Water", "Fighting", "Metal"],

		name: {
			'en-us': "Sonic Peridot",
			'fr-fr': "Péridot Sonique",
			'es-es': "Peridoto Sónico",
			'it-it': "Peridoto Sonico",
			'pt-br': "Peridoto Sônico",
			'de-de': "Schall-Peridot"
		},

		effect: {
			'en-us': "This attack does 100 damage to each of your opponent's Pokémon ex and Pokémon V. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Cette attaque inflige 100 dégâts à chacun des Pokémon-ex et Pokémon-V de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'es-es': "Este ataque hace 100 puntos de daño a cada uno de los Pokémon ex y Pokémon V de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'it-it': "Questo attacco infligge 100 danni a ciascuno dei Pokémon-ex e dei Pokémon-V del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "Este ataque causa 100 pontos de dano a cada um dos Pokémon ex e Pokémon V do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'de-de': "Diese Attacke fügt jedem Pokémon-ex und Pokémon-V deines Gegners 100 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794595,
				tcgplayer: 589951
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
