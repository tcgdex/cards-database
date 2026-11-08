import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Battle Cage",
		'fr-fr': "Cage de Combat",
		'es-es': "Jaula de Combate",
		'es-mx': "Jaula de Combate",
		'de-de': "Kampfkäfig",
		'it-it': "Gabbia di Lotta",
		'pt-br': "Jaula de Batalha"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Prevent all damage counters from being placed on Benched Pokémon (both yours and your opponent's) by effects of attacks and Abilities from the opponent's Pokémon. (Damage from attacks is still taken.)",
		'fr-fr': "Empêchez que tout marqueur de dégâts soit placé sur les Pokémon de Banc (les vôtres et ceux de votre adversaire) par les effets des attaques et des talents des Pokémon de votre adversaire. (Les dégâts des attaques continuent de s'appliquer.)",
		'es-es': "Se evita que los Pokémon en Banca (tanto tuyos como de tu rival) reciban contadores de daño por los efectos de los ataques y las habilidades de los Pokémon del rival. (Se siguen aplicando los puntos de daño de los ataques).",
		'es-mx': "Se evita que se ponga cualquier contador de daño sobre los Pokémon en Banca (tanto tuyos como de tu rival) por los efectos de los ataques y las Habilidades de los Pokémon del rival. (El daño de los ataques se sigue recibiendo).",
		'de-de': "Verhindere das Platzieren aller Schadensmarken auf Pokémon auf der Bank (deiner und der deines Gegners) durch Effekte von Attacken und Fähigkeiten von Pokémon des Gegners. (Schaden durch Attacken wird weiterhin zugefügt.)",
		'it-it': "Impedisci che vengano messi segnalini danno sui Pokémon in panchina, sia tuoi che del tuo avversario, per effetto degli attacchi e delle abilità dei Pokémon dell'avversario. I danni degli attacchi vengono comunque subiti.",
		'pt-br': "Previna todos os contadores de dano de serem colocados nos Pokémon no Banco (seus e do seu oponente) pelos efeitos de ataques e Habilidades dos Pokémon do oponente. (O dano de ataques ainda é recebido.)"
	},

	trainerType: "Stadium",
	regulationMark: "I",

	illustrator: "MARINA Chikazawa",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857691,
				tcgplayer: 662131,
				cardtrader: 356902
			}
		},
	],
}

export default card
