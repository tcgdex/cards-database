import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Rabsca",
		fr: "Bérasca",
		es: "Rabsca",
		it: "Rabsca",
		pt: "Rabsca"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spherical Shield",
			fr: "Bouclier Sphérique",
			es: "Escudo Esférico",
			it: "Scudo Sferico",
			pt: "Escudo Esférico"
		},

		effect: {
			en: "Prevent all damage from and effects of attacks from your opponent's Pokémon done to your Benched Pokémon.",
			fr: "Évitez tous les dégâts et les effets d'attaques infligés à vos Pokémon de Banc par les Pokémon de votre adversaire.",
			es: "Se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a tus Pokémon en Banca.",
			it: "Previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon in panchina.",
			pt: "Previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados aos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card