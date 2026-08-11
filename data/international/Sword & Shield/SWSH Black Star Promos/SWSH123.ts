import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	description: {
		'en-us': "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid."
	},

	stage: "Basic",

	name: {
		'en-us': "Galarian Articuno",
		'fr-fr': "Artikodin de Galar",
		'de-de': "Galar-Arktos",
		'es-es': "Articuno de Galar",
		'pt-br': "Articuno de Galar",
		'it-it': "Articuno di Galar"
	},

	rarity: "Promo",
	dexId: [144],
	hp: 120,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cruel Charge",
			'fr-fr': "Charge Implacable",
			'de-de': "Gefühlskalter Ansturm",
			'es-es': "Carga Calculadora",
			'pt-br': "Carga Cruel",
			'it-it': "Carica Sanguefreddo"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 {P} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {P} de votre main à ce Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 {P}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {P} de tu mano a este Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {P} da sua mão a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia {P} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psylaser",
			'fr-fr': "Laser Psy",
			'de-de': "Psilaser",
			'es-es': "Psicoláser",
			'pt-br': "Psicolaser",
			'it-it': "Psicolaser"
		},

		effect: {
			'en-us': "Discard all {P} Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toute l'Énergie {P} de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege alle {P}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Descarta todas las Energías {P} de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte todas as Energias {P} deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Scarta tutte le Energie {P} da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
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

	regulationMark: "E",

	thirdParty: {
		cardmarket: 573858
	}
}

export default card
