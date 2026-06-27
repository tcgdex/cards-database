import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [578],
	set: Set,

	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
		es: "Solosis",
		it: "Solosis",
		pt: "Solosis",
		de: "Monozyto"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cell Spear",
			fr: "Lance Cellulaire",
			es: "Lanza Celular",
			it: "Lancia Cellulare",
			pt: "Lança de Células",
			de: "Zellenspeer"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Pon 2 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			it: "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Coloque 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			de: "Lege 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Its psychic power can supposedly cover a range of more than half a mile—but only if its two brains can agree with each other.",
	},

	thirdParty: {
		cardmarket: 682124,
		tcgplayer: 451731
	}
}

export default card