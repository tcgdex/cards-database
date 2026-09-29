import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d'Alola",
		es: "Exeggutor de Alola",
		de: "Alola-Kokowei",
		it: "Exeggutor di Alola",
		pt: "Exeggutor de Alola",
	},

	illustrator: "yuu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [103],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		de: "Owei",
		it: "Exeggcute",
		pt: "Exeggcute",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Scale Up",
			fr: "Élongation",
			es: "Crecer",
			de: "Hoch hinaus",
			it: "Ingrandirsi",
			pt: "Escalonar",
		},

		effect: {
			en: "If this Pokémon has 6 or more {G} Energy attached, it gets +250 HP.",
			fr: "Si au moins 6 Énergies {G} sont attachées à ce Pokémon, il a +250 PV.",
			es: "Si este Pokémon tiene 6 Energías {G} o más unidas, obtiene 250 PS más.",
			de: "Wenn an dieses Pokémon 6 oder mehr {G}-Energien angelegt sind, erhält es +250 KP.",
			it: "Se questo Pokémon ha sei o più Energie {G} assegnate, ha 250 PS in più.",
			pt: "Se este Pokémon tiver 6 ou mais Energias {G} ligadas a ele, receberá +250 PS.",
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			de: "Megasauger",
			it: "Megassorbimento",
			pt: "Megadreno",
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			fr: "Soignez 50 dégâts de ce Pokémon.",
			es: "Cura 50 puntos de daño a este Pokémon.",
			de: "Heile 50 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 50 danni.",
			pt: "Cure 50 pontos de dano deste Pokémon.",
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895609,
				tcgplayer: 713262
			}
		}
	],
}

export default card
