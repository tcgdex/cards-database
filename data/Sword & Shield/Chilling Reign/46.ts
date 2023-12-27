import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Ice Rider Calyrex VMAX",
		fr: "Sylveroy Cavalier du Froid VMAX",
		es: "Calyrex Jinete Glacial VMAX",
		it: "Calyrex Cavaliere Glaciale VMAX",
		pt: "Calyrex Cavaleiro Glacial VMAX",
		de: "Schimmelreiter-Coronospa VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 320,
	dexId: [898],

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Ice Rider Calyrex V",
		fr: 'Sylveroy Cavalier du Froid-V',
		es: "Calyrex Jinete Glacial V",
		it: "Calyrex Cavaliere Glaciale-V",
		pt: "Calyrex Cavaleiro Glacial V",
		de: "Schimmelreiter-Coronospa-V"
	},

	stage: 'VMAX',

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ride of the High King",
				fr: "Chevauchée Impériale",
				es: "Paseo del Emperador",
				it: "Cavalcata dell'Imperatore",
				pt: "Montaria do Rei Supremo",
				de: "Ritt des Kaisers"
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
			},
			damage: '10+'
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Max Lance",
				fr: "Lançomax",
				es: "Maxilanza",
				it: "Dynalancia",
				pt: "Lança Longa Max",
				de: "Dyna-Lanze"
			},
			effect: {
				en: "You may discard up to 2 Energy from this Pokémon. If you do, this attack does 120 more damage for each card you discarded in this way.",
				fr: "Vous pouvez défausser jusqu'à 2 Énergies de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Puedes descartar hasta 2 Energías de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Puoi scartare fino a due Energie da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Você pode descartar até 2 Energias deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Du kannst bis zu 2 Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke für jede auf diese Weise abgelegte Karte 120 Schadenspunkte mehr zu."
			},
			damage: '10+'
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},


}

export default card
