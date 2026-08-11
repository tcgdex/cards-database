import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
				'es-es': "Rayo Psi",
				'it-it': "Psico",
				'pt-br': "Raio Psíquico",
				'de-de': "Mentale Blockade"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Resonance",
				'fr-fr': "Résonance Psychique",
				'es-es': "Resonancia Psíquica",
				'it-it': "Risonanza Psichica",
				'pt-br': "Ressonância Psíquica",
				'de-de': "Psycho-Resonanz"
			},
			effect: {
				'en-us': "If your opponent has any Psychic Pokémon in play, this attack does 60 more damage.",
				'fr-fr': "Si votre adversaire a un Pokémon Psychic en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Pokémon Psychic en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il tuo avversario ha dei Pokémon Psychic in gioco, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o seu oponente tiver algum Pokémon Psychic em jogo, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner mindestens 1 Psychic-Pokémon im Spiel hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

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

	retreat: 3,

	description: {
		'en-us': "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
	},

	thirdParty: {
		cardmarket: 316014,
		tcgplayer: 157704
	}
}

export default card
