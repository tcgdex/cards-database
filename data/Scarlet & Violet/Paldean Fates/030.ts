import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Chimecho",
		fr: "Éoko",
		es: "Chimecho",
		it: "Chimecho",
		pt: "Chimecho"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sleep Inducer",
			fr: "Poussododo",
			es: "Inductor de Sueño",
			it: "Induci-Sonno",
			pt: "Indutor de Sono"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. The new Active Pokémon is now Asleep.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Il nuovo Pokémon attivo viene addormentato.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. O novo Pokémon Ativo agora está Adormecido."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card