import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine ex",
		fr: "Arcanin-ex",
		es: "Arcanine ex",
		it: "Arcanine-ex",
		pt: "Arcanine ex",
		de: "Arkani-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Raging Claws",
			fr: "Griffes Enragées",
			es: "Garras Furiosas",
			it: "Furiartigli",
			pt: "Garras Devastadoras",
			de: "Wutklauen"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
			es: "Llama Viva",
			it: "Splendifiamma",
			pt: "Chama Reluzente",
			de: "Helle Flamme"
		},

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			it: "Scarta due Energie {R} da questo Pokémon.",
			pt: "Descarte 2 Energias {R} deste Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
        cardmarket: 702520,
        tcgplayer: 490082
    }
}

export default card