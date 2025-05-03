import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Castform Sunny Form",
		fr: "Morphéo Forme Solaire",
		es: "Castform Forma Sol",
		it: "Castform Forma Sole",
		pt: "Castform Forma Ensolarada",
		de: "Formeo Sonnenform"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			es: "Quemadura",
			it: "Scottata",
			pt: "Chamuscada",
			de: "Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Sunny Assist",
			fr: "Assistance Ensoleillée",
			es: "Asistencia Soleada",
			it: "Assistisole",
			pt: "Assistência Ensolarada",
			de: "Sonnige Hilfe"
		},

		effect: {
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
