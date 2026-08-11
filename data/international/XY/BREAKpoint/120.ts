import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "M Scizor EX",
		fr: "M-Cizayox EX",
		es: "M-Scizor EX",
		it: "M Scizor EX",
		pt: "M-Scizor EX",
		de: "M-Scherox EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 220,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
		es: "Scizor-EX",
		it: "Scizor-EX",
		pt: "Scizor-EX",
		de: "Scherox-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Iron Crusher",
				fr: "Écrase Fer",
				es: "Triturahierros",
				it: "Schiacciata Ferrea",
				pt: "Esmagador de Ferro",
				de: "Eisenbeißer"
			},
			effect: {
				en: "You may discard a Special Energy attached to your opponent's Active Pokémon or a Stadium card in play.",
				fr: "Vous pouvez défausser une carte Énergie spéciale attachée au Pokémon Actif de votre adversaire ou une carte Stade en jeu.",
				es: "Puedes descartar 1 Energía Especial unida al Pokémon Activo de tu rival o 1 carta de Estadio en juego.",
				it: "Puoi scartare una Energia speciale assegnata al Pokémon attivo del tuo avversario o una carta Stadio in gioco.",
				pt: "Você pode descartar uma Energia Especial ligada ao Pokémon Ativo do seu oponente ou um card de Estádio em jogo.",
				de: "Du kannst 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf dessen Ablagestapel oder 1 Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 111642
	}
}

export default card
