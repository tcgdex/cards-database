import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Ducklett",
		fr: "Couaneton",
		de: "Piccolente",
		it: "Ducklett",
		pt: "Ducklett",
		es: "Ducklett",
		'es-mx': "Ducklett"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Firefighting",
			fr: "Anti-Flammes",
			de: "Feuerwehr",
			it: "Estinzione",
			pt: "Apagar Incêndios",
			es: "Antiincendios",
			'es-mx': "Apagafuegos"
		},

		effect: {
			en: "Discard a {R} Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie {R} du Pokémon Actif de votre adversaire.",
			de: "Lege 1 {R}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia {R} dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia {R} do Pokémon Ativo do seu oponente.",
			es: "Descarta 1 Energía {R} del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía {R} del Pokémon Activo de tu rival."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			de: "Flügelschlag",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			es: "Ataque Ala",
			'es-mx': "Ataque de Ala"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card