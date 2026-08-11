import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine ex",
		'fr-fr': "Arcanin-ex",
		'es-es': "Arcanine ex",
		'it-it': "Arcanine-ex",
		'pt-br': "Arcanine ex",
		'de-de': "Arkani-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Raging Claws",
			'fr-fr': "Griffes Enragées",
			'es-es': "Garras Furiosas",
			'it-it': "Furiartigli",
			'pt-br': "Garras Devastadoras",
			'de-de': "Wutklauen"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Bright Flame",
			'fr-fr': "Flamme Éclatante",
			'es-es': "Llama Viva",
			'it-it': "Splendifiamma",
			'pt-br': "Chama Reluzente",
			'de-de': "Helle Flamme"
		},

		effect: {
			'en-us': "Discard 2 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon.",
			'es-es': "Descarta 2 Energías {R} de este Pokémon.",
			'it-it': "Scarta due Energie {R} da questo Pokémon.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			'de-de': "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	thirdParty: {
        cardmarket: 702520,
        tcgplayer: 490082
    }
}

export default card