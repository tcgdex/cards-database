import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Electrical Grounding",
			'fr-fr': "Prise de Terre",
			'es-es': "Toma de Tierra",
			'it-it': "Messa a Terra Elettrica",
			'pt-br': "Aterramento Elétrico",
			'de-de': "Elektrische Erdung"
		},

		effect: {
			'en-us': "When 1 of your Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a {L} Energy from that Pokémon to this Pokémon.",
			'fr-fr': "Lorsque l'un de vos Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, vous pouvez déplacer une Énergie {L} de ce Pokémon-là vers celui-ci.",
			'es-es': "Cuando uno de tus Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes mover 1 Energía {L} de ese Pokémon a este Pokémon.",
			'it-it': "Quando uno dei tuoi Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi spostare un'Energia {L} da quel Pokémon a questo Pokémon.",
			'pt-br': "Quando 1 dos seus Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá mover uma Energia {L} daquele Pokémon para este Pokémon.",
			'de-de': "Wenn 1 deiner Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, kannst du 1 {L}-Energie von jenem Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751546,
				tcgplayer: 534165,
				cardtrader: 274203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751546,
				tcgplayer: 534165,
				cardtrader: 274203
			}
		},
	],

	illustrator: "Naoyo Kimura",

	description: {
		'en-us': "Its tail discharges electricity into the ground, protecting it from getting shocked.",
	},

}

export default card
