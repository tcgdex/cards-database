import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Galarian Articuno",
		'fr-fr': "Artikodin de Galar",
		'es-es': "Articuno de Galar",
		'it-it': "Articuno di Galar",
		'pt-br': "Articuno de Galar",
		'de-de': "Galar-Arktos"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Kagemaru Himeno",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cruel Charge",
			'fr-fr': "Charge Implacable",
			'es-es': "Carga Calculadora",
			'it-it': "Carica Sanguefreddo",
			'pt-br': "Cruel Charge",
			'de-de': "Gefühlskalter Ansturm"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Psychic Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Psychic de votre main à ce Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía Psychic de tu mano a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia Psychic dalla tua mano.",
			'pt-br': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Psychic Energy cards from your hand to this Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Psychic-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psylaser",
			'fr-fr': "Laser Psy",
			'es-es': "Psicoláser",
			'it-it': "Psicolaser",
			'pt-br': "Psylaser",
			'de-de': "Psilaser"
		},

		effect: {
			'en-us': "Discard all Psychic Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toute l'Énergie Psychic de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías Psychic de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta tutte le Energie Psychic da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Discard all Psychic Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Lege alle Psychic-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Psychic", "Psychic", "Colorless"]
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

	description: {
		'en-us': "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid."
	},

	dexId: [144],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574111,
				tcgplayer: 246837
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574111,
				tcgplayer: 246837
			}
		},
	],
}

export default card
