import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Call Sign",
			'fr-fr': "Signe d'Appel",
			'es-es': "Señal de Llamada",
			'it-it': "Chiamata",
			'pt-br': "Sinal de Chamada",
			'de-de': "Rufzeichen"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Ice Beam",
			'fr-fr': "Laser Glace",
			'es-es': "Rayo Hielo",
			'it-it': "Geloraggio",
			'pt-br': "Raio Congelante",
			'de-de': "Eisstrahl"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794313,
				tcgplayer: 589909
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794313,
				tcgplayer: 589909
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			thirdParty: {
				cardmarket: 845408,
			}
		},
	],

	illustrator: "sui",
	
}

export default card
