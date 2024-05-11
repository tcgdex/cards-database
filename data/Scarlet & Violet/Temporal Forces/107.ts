import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Damage Collection",
			fr: "Accumulation de Dégâts",
			es: "Recogida de Daño",
			it: "Raccolta di Danni",
			pt: "Colecionar Dano",
			de: "Schadenssammlung"
		},

		effect: {
			en: "You may move any number of damage counters from your opponent's Benched Pokémon to their Active Pokémon.",
			fr: "Vous pouvez déplacer autant de marqueurs de dégâts que vous le voulez des Pokémon de Banc de votre adversaire vers son Pokémon Actif.",
			es: "Puedes mover cualquier cantidad de contadores de daño de los Pokémon en Banca de tu rival a su Pokémon Activo.",
			it: "Puoi spostare un numero qualsiasi di segnalini danno dai Pokémon nella panchina del tuo avversario al suo Pokémon attivo.",
			pt: "Você pode mover qualquer quantidade de contadores de dano dos Pokémon no Banco do seu oponente para o Pokémon Ativo dele.",
			de: "Du kannst beliebig viele Schadensmarken von Pokémon auf der Bank deines Gegners auf sein Aktives Pokémon verschieben."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card