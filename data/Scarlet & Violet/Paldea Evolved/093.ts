import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Dedenne-ex",
		en: "Dedenne ex",
		es: "Dedenne ex",
		it: "Dedenne-ex",
		pt: "Dedenne ex",
		de: "Dedenne-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			fr: "Échange-Queue",
			en: "Tail Swap",
			es: "Coletazo Intercambio",
			it: "Codascambio",
			pt: "Troca de Cauda",
			de: "Schweiftausch"
		},

		effect: {
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			en: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			es: "Mueve todos los contadores de daño de uno de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			it: "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
			de: "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			fr: "Coup Mirifique",
			en: "Wondrous Shot",
			es: "Disparo Asombroso",
			it: "Colpo Meraviglioso",
			pt: "Disparo Admirável",
			de: "Wundersamer Schuss"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card