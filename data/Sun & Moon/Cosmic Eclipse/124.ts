import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Boiling Blood",
				fr: "Sang Bouillant",
				es: "Sangre Hirviente",
				it: "Sangue Ribollente",
				pt: "Sangue Quente",
				de: "Kochendes Blut"
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon’s attacks cost ColorlessColorlessColorless less.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
				es: "Si tu rival tiene algún Pokémon-GX o Pokémon-EX en juego, los ataques de este Pokémon cuestan ColorlessColorlessColorless menos.",
				it: "Se il tuo avversario ha dei Pokémon-GX o dei Pokémon-EX in gioco, il costo degli attacchi di questo Pokémon è ridotto di ColorlessColorlessColorless.",
				pt: "Se o seu oponente tiver algum Pokémon-GX ou Pokémon-EX em jogo, os ataques deste Pokémon custarão ColorlessColorlessColorless a menos.",
				de: "Wenn dein Gegner mindestens 1 Pokémon-GX oder Pokémon-EX im Spiel hat, verringern sich die Kosten der Attacken dieses Pokémon um ColorlessColorlessColorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Voltage Claw",
				fr: "Griffe Volt",
				es: "Garra Voltaje",
				it: "Artigli Voltaici",
				pt: "Garra de Alta Tensão",
				de: "Stromklaue"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
				fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408269,
		tcgplayer: 201161
	}
}

export default card
