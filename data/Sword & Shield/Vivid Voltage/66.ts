import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		es: "Shedinja",
		it: "Shedinja",
		pt: "Shedinja",
		de: "Ninjatom"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Survival",
				fr: "Coquille de Survie",
				es: "Caparazón de Supervivencia",
				it: "Guscio Superstite",
				pt: "Sobrevivência de Concha",
				de: "Überlebenspanzer"
			},
			effect: {
				en: "Put this Pokémon into play only with the effect of Ninjask’s Cast-Off Shell Ability. (When you are setting up to play, you cannot put it face down as your Active Pokémon or on your Bench.)",
				fr: "Ce Pokémon ne peut être mis en jeu que par l’effet du talent Coquille Libérante de Ninjask. (Lorsque vous vous apprêtez à jouer, vous ne pouvez pas le placer face cachée en tant que Pokémon Actif ou Pokémon de Banc.)",
				es: "Pon este Pokémon en juego solo con el efecto de la habilidad Caparazón Desprendido de Ninjask. (Cuando te estás preparando para jugar, no puedes ponerlo boca abajo como tu Pokémon Activo o en tu Banca).",
				it: "Metti questo Pokémon in gioco solo per effetto dell’abilità Scartaguscio di Ninjask. Durante l’allestimento del gioco, non puoi metterlo a faccia in giù come tuo Pokémon attivo o in panchina.",
				pt: "Coloque este Pokémon em jogo somente com o efeito da Habilidade Concha Descartada de Ninjask (enquanto estiver preparando seu jogo, você não poderá colocá-lo virado para baixo como seu Pokémon Ativo ou no Banco).",
				de: "Bringe dieses Pokémon nur durch den Effekt von Ninjasks Fähigkeit Panzer abwerfen ins Spiel. (Bei der Spielvorbereitung kannst du es nicht verdeckt als dein Aktives Pokémon oder auf deine Bank legen.)"
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
				en: "Life Squeeze",
				fr: "Presse-Vie",
				es: "Estrujamiento Vital",
				it: "Spremivita",
				pt: "Espremer a Vida",
				de: "Lebensquetscher"
			},
			effect: {
				en: "Put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
				fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ne lui reste que 10 PV.",
				es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
				it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
				de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind."
			},

		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
