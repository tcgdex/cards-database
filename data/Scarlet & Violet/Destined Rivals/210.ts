import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato",
		it: "Drowzee",
		es: "Drowzee",
		pt: "Drowzee"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Forced Sleep",
			fr: "Sommeil Forcé",
			de: "Ungewollter Schlummer",
			it: "Sonno Forzato",
			es: "Sueño Obligado",
			pt: "Dormir à Força"
		},

		effect: {
			en: "Your opponent chooses 1 of their Benched Pokémon and switches it with their Active Pokémon. The new Active Pokémon is now Asleep.",
			fr: "Votre adversaire choisit l'un de ses Pokémon de Banc et l'échange contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			de: "Dein Gegner wählt 1 Pokémon auf seiner Bank und tauscht es gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon schläft jetzt.",
			it: "Il tuo avversario sceglie uno dei suoi Pokémon in panchina e lo scambia con il suo Pokémon attivo. Il nuovo Pokémon attivo viene addormentato.",
			es: "Tu rival elige 1 de sus Pokémon en Banca y lo cambia por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			pt: "Seu oponente escolhe 1 dos Pokémon no Banco dele e troca-o pelo Pokémon Ativo dele. O novo Pokémon Ativo agora está Adormecido."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			es: "Bofetada Gentil",
			pt: "Tapinha"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card