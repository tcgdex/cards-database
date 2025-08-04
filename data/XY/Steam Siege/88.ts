import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stall",
				fr: "Frein",
				es: "Rezagado",
				it: "Rallentatore",
				pt: "Adiar",
				de: "Zeitspiel"
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Discard an Energy attached to 1 of your opponent's Pokémon.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
				es: "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Descarta 1 Energía unida a 1 de los Pokémon de tu rival.",
				it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
				de: "Du kannst mit dieser Attacke nur angreifen, wenn du als zweiter Spieler am Zug bist und nur während deines ersten Zuges. Lege 1 an ein gegnerisches Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291648,
		tcgplayer: 121214
	}
}

export default card
