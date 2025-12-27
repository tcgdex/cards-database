import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

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
			es: "Sueño Obligado",
			it: "Sonno Forzato",
			pt: "Dormir à Força",
			de: "Ungewollter Schlummer"
		},

		effect: {
			en: "Your opponent chooses 1 of their Benched Pokémon and switches it with their Active Pokémon. The new Active Pokémon is now Asleep.",
			fr: "Votre adversaire choisit l'un de ses Pokémon de Banc et l'échange contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			es: "Tu rival elige 1 de sus Pokémon en Banca y lo cambia por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			it: "Il tuo avversario sceglie uno dei suoi Pokémon in panchina e lo scambia con il suo Pokémon attivo. Il nuovo Pokémon attivo viene addormentato.",
			pt: "Seu oponente escolhe 1 dos Pokémon no Banco dele e troca-o pelo Pokémon Ativo dele. O novo Pokémon Ativo agora está Adormecido.",
			de: "Dein Gegner wählt 1 Pokémon auf seiner Bank und tauscht es gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon schläft jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Tomokazu Komiya",

	thirdParty: {
        cardmarket: 702378,
        tcgplayer: 490070
    }
}

export default card