import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mew ex",
		fr: "Mew-ex",
		de: "Mew-ex",
		es: "Mew ex",
		it: "Mew-ex",
		'es-mx': "Mew ex"
	},

	illustrator: "YOSHIROTTEN",
	rarity: "Futuristic Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Memory Helix",
			fr: "Spirale Mémoire",
			de: "Gedächtnishelix",
			es: "Hélice Recuerdo",
			it: "Elica Mnemonica",
			'es-mx': "Memoria Hélice"
		},

		effect: {
			en: "This Pokémon can use the attacks of any of your Benched Pokémon. (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n'importe lequel de vos Pokémon de Banc. (Vous avez toujours besoin des Énergies nécessaires pour utiliser chaque attaque.)",
			de: "Dieses Pokémon kann die Attacken eines beliebigen Pokémon auf deiner Bank einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)",
			es: "Este Pokémon puede usar los ataques de cualquiera de tus Pokémon en Banca. (Sigues necesitando las Energías requeridas para usar cada ataque).",
			it: "Questo Pokémon può usare gli attacchi di uno qualsiasi dei Pokémon nella tua panchina. Devi comunque avere l'Energia necessaria per usare ciascun attacco.",
			'es-mx': "Este Pokémon puede usar los ataques de cualquiera de tus Pokémon en Banca. (Sigues necesitando las Energías requeridas para usar cada ataque)."
		}
	}],

	attacks: [{
		name: {
			en: "Teleportation Burst",
			fr: "Téléportation Explosive",
			de: "Blitz-Teleportation",
			es: "Explosión Teleportadora",
			it: "Scoppio Teletrasporto",
			'es-mx': "Estallido Teletransportador"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno nella tua panchina.",
			'es-mx': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0
}

export default card