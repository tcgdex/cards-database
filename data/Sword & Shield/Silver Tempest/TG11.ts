import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria",
		fr: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		de: "Wablu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Magical Echo",
			fr: "Écho Magique",
			es: "Eco Mágico",
			it: "Eco Incantevole",
			pt: "Eco Mágico",
			de: "Magisches Echo"
		},

		effect: {
			en: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			es: "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			it: "Sposta tutti i segnalini danno da uno dei tuoi Pokémon in panchina al Pokémon attivo del tuo avversario.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente.",
			de: "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador",
			de: "Peitschender Wind"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card