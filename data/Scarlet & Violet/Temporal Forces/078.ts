import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Flutter Mane",
		fr: "Flotte-Mèche",
		es: "Melenaleteo",
		it: "Crinealato",
		pt: "Juba Sopro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Midnight Fluttering",
			fr: "Flottement de Minuit",
			es: "Aleteo de Medianoche",
			it: "Nottealata",
			pt: "Sopro da Meia-noite"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon has no Abilities, except for Midnight Fluttering.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire n'a pas de talent, à l'exception de Flottement de Minuit.",
			es: "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no tiene ninguna habilidad, excepto Aleteo de Medianoche.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non ha abilità, a eccezione di Nottealata.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não terá Habilidades, exceto por Sopro da Meia-noite."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hex Hurl",
			fr: "Lancer de Malédictions",
			es: "Lanzamiento Maléfico",
			it: "Scagliasciagura",
			pt: "Lançar Feitiço"
		},

		effect: {
			en: "Put 2 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 2 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 2 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti due segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 2 contadores de dano nos Pokémon no Banco do seu oponente como desejar."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card