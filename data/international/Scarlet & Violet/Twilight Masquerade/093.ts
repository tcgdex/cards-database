import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [905],
	set: Set,

	name: {
		'en-us': "Enamorus",
		'fr-fr': "Amovénus",
		'es-es': "Enamorus",
		'it-it': "Enamorus",
		'pt-br': "Enamorus",
		'de-de': "Cupidos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Heart Sign",
			'fr-fr': "Signe de Cœur",
			'es-es': "Señal Corazón",
			'it-it': "Cuoricino",
			'pt-br': "Sinal de Coração",
			'de-de': "Herzbild"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Love Resonance",
			'fr-fr': "Résonance Amoureuse",
			'es-es': "Resonancia Amorosa",
			'it-it': "Risonanza Amorosa",
			'pt-br': "Ressonância do Amor",
			'de-de': "Liebesresonanz"
		},

		effect: {
			'en-us': "If any of your Pokémon in play are the same type as any of your opponent's Pokémon in play, this attack does 120 more damage.",
			'fr-fr': "Si l'un de vos Pokémon en jeu est du même type que l'un des Pokémon en jeu de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon en juego es del mismo tipo que alguno de los Pokémon en juego de tu rival, este ataque hace 120 puntos de daño más.",
			'it-it': "Se uno dei tuoi Pokémon in gioco è dello stesso tipo di uno dei Pokémon in gioco del tuo avversario, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Pokémon em jogo for do mesmo tipo que algum dos Pokémon do seu oponente em jogo, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon im Spiel denselben Typ hat wie mindestens 1 Pokémon deines Gegners im Spiel, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon's love gives rise to the budding of fresh life across Hisui.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769267,
				tcgplayer: 550137
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769267,
				tcgplayer: 550137
			}
		},
	],

	illustrator: "DOM",

}

export default card
