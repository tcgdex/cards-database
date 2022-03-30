import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		it: "Barbaracle",
		pt: "Barbaracle",
		de: "Thanathora"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		689,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		it: "Binacle",
		pt: "Binacle",
		de: "Bithora"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hand Block",
				fr: "Blocage Manuel",
				es: "Bloqueo de Mano",
				it: "Bloccamano",
				pt: "Bloqueio da Mão",
				de: "Handblockade"
			},
			effect: {
				en: "If you have a Stadium card in play, your opponent can't attach any Special Energy cards from his or her hand to his or her Pokémon.",
				fr: "Si vous avez une carte Stade en jeu, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
				es: "Si tienes alguna carta de Estadio en juego, tu rival no puede unir ninguna carta de Energía Especial de su mano a sus Pokémon.",
				it: "Se hai in gioco una carta Stadio, il tuo avversario non può assegnare carte Energia speciale dalla sua mano ai suoi Pokémon.",
				pt: "Se você tiver um card de Estádio em jogo, o seu oponente não poderá ligar nenhum card de Energia Especial da própria mão a Pokémon dele(a).",
				de: "Wenn du 1 Stadionkarte im Spiel hast, kann dein Gegner keine Spezial-Energiekarten von seiner Hand an seine Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch'Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
