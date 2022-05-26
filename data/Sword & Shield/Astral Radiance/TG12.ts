import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hoothoot"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stand Sentry",
			fr: "Veilleur au Guet",
			es: "Posición Centinela",
			it: "Sentinella in Posizione",
			pt: "Ficar de Sentinela",
			de: "Wache stehen"
		},

		effect: {
			en: "Basic Energy attached to your Benched Pokémon can't be discarded by an effect of your opponent's Item or Supporter cards.",
			fr: "Les Énergies de base attachées à vos Pokémon de Banc ne peuvent pas être défaussées par les effets des cartes Objet ou Supporter de votre adversaire.",
			es: "Las Energías Básicas unidas a tus Pokémon en Banca no pueden descartarse por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			it: "Nessuna Energia base assegnata ai tuoi Pokémon in panchina può essere scartata per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			pt: "Energias básicas ligadas aos seus Pokémon no Banco não podem ser descartadas pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			de: "An die Pokémon auf deiner Bank angelegte Basis-Energien können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners auf deinen Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card