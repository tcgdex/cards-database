import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		fr: "Darkrai",
		en: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		pt: "Darkrai",
		de: "Darkrai"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Sommeil Obscur",
			en: "Dark Slumber",
			es: "Letargo Oscuro",
			it: "Sonno Oscuro",
			pt: "Sono Sombrio",
			de: "Dunkler Schlummer"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Cyclone Nocturne",
			en: "Night Cyclone",
			es: "Ciclón Nocturno",
			it: "Ciclone Notturno",
			pt: "Ciclone Noturno",
			de: "Nachtsturm"
		},

		effect: {
			fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Bun Toujo"
}

export default card
