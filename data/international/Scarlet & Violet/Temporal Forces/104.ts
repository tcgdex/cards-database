import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'en-us': "Gengar ex",
		'fr-fr': "Ectoplasma-ex",
		'es-es': "Gengar ex",
		'it-it': "Gengar-ex",
		'pt-br': "Gengar ex",
		'de-de': "Gengar-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gnawing Curse",
			'fr-fr': "Malédiction Rongeante",
			'es-es': "Maldición Persistente",
			'it-it': "Maledizione Assillante",
			'pt-br': "Maldição Corrosiva",
			'de-de': "Quälender Fluch"
		},

		effect: {
			'en-us': "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			'fr-fr': "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'es-es': "Cada vez que tu rival una 1 carta de Energía de su mano a uno de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
			'it-it': "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Sempre que seu oponente ligar uma carta de Energia da mão dele a 1 dos Pokémon dele, coloque 2 contadores de dano naquele Pokémon.",
			'de-de': "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Tricky Steps",
			'fr-fr': "Pas Délicats",
			'es-es': "Pasos Astutos",
			'it-it': "Passinganno",
			'pt-br': "Passos Ardilosos",
			'de-de': "Listiges Vorgehen"
		},

		effect: {
			'en-us': "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			'es-es': "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			'it-it': "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			'pt-br': "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			'de-de': "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760734,
				tcgplayer: 542848
			}
		},
	],

	suffix: "ex",
	illustrator: "Nisota Niso",

}

export default card