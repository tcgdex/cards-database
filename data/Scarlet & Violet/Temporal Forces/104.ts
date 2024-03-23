import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar ex",
		fr: "Ectoplasma-ex",
		es: "Gengar ex",
		it: "Gengar-ex",
		pt: "Gengar ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gnawing Curse",
			fr: "Malédiction Rongeante",
			es: "Maldición Persistente",
			it: "Maledizione Assillante",
			pt: "Maldição Corrosiva"
		},

		effect: {
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			fr: "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			es: "Cada vez que tu rival una 1 carta de Energía de su mano a uno de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
			it: "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
			pt: "Sempre que seu oponente ligar uma carta de Energia da mão dele a 1 dos Pokémon dele, coloque 2 contadores de dano naquele Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Tricky Steps",
			fr: "Pas Délicats",
			es: "Pasos Astutos",
			it: "Passinganno",
			pt: "Passos Ardilosos"
		},

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			it: "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			pt: "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card