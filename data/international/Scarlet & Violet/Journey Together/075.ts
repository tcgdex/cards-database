import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'en-us': "Alcremie ex",
		'fr-fr': "Charmilly-ex",
		'es-es': "Alcremie ex",
		'de-de': "Pokusan-ex",
		'it-it': "Alcremie-ex",
		'pt-br': "Alcremie ex",
		'es-mx': "Alcremie ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'de-de': "Hokumil",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'es-mx': "Milcery"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Confectionary Gift",
			'fr-fr': "Cadeau Gâteau",
			'es-es': "Golosina de Regalo",
			'de-de': "Konfektgeschenk",
			'it-it': "Dolcedono",
			'pt-br': "Presente de Confeitaria",
			'es-mx': "Dulce Regalo"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 30 puntos de daño a uno de tus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes curar 30 puntos de daño a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Whipped Shot",
			'fr-fr': "Tir Fouetté",
			'es-es': "Disparo Batido",
			'de-de': "Sahneschlag",
			'it-it': "Montacolpo",
			'pt-br': "Disparo de Chantilly",
			'es-mx': "Disparo Batido"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817227,
				tcgplayer: 623502
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 855659,
			}
		},
	],
}

export default card
