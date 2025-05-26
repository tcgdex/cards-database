import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	description: {
		en: "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid."
	},

	stage: "Basic",

	name: {
		en: "Galarian Articuno",
		fr: "Artikodin de Galar",
		de: "Galar-Arktos",
		es: "Articuno de Galar",
		pt: "Articuno de Galar",
		it: "Articuno di Galar"
	},

	rarity: "None",
	dexId: [144],
	hp: 120,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Cruel Charge",
			fr: "Charge Implacable",
			de: "Gefühlskalter Ansturm",
			es: "Carga Calculadora",
			pt: "Carga Cruel",
			it: "Carica Sanguefreddo"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 {P} Energy cards from your hand to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {P} de votre main à ce Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 {P}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {P} de tu mano a este Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {P} da sua mão a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia {P} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psylaser",
			fr: "Laser Psy",
			de: "Psilaser",
			es: "Psicoláser",
			pt: "Psicolaser",
			it: "Psicolaser"
		},

		effect: {
			en: "Discard all {P} Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l'Énergie {P} de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Lege alle {P}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Descarta todas las Energías {P} de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Descarte todas as Energias {P} deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Scarta tutte le Energie {P} da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
