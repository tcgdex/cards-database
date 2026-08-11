import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [376],

	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Levitation Field",
				'fr-fr': "Champ de Lévitation",
				'es-es': "Campo de Levitación",
				'it-it': "Campo di Levitazione",
				'pt-br': "Campo de Levitação",
				'de-de': "Schwebefeld"
			},
			effect: {
				'en-us': "Your Pokémon in play have no Retreat Cost.",
				'fr-fr': "Vos Pokémon en jeu n'ont pas de Coût de Retraite.",
				'es-es': "Tus Pokémon en juego no tienen ningún Coste de Retirada.",
				'it-it': "I tuoi Pokémon in gioco non hanno costo di ritirata.",
				'pt-br': "Seus Pokémon em jogo não têm custo de Recuo.",
				'de-de': "Deine Pokémon im Spiel haben keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leg Quake",
				'fr-fr': "Piétinement Sismique",
				'es-es': "Zancudida",
				'it-it': "Arti Tellurici",
				'pt-br': "Pernas Sísmicas",
				'de-de': "Beinbeben"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Evolución, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Evoluzione.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon de Evolução, ele não poderá atacar durante o próximo turno do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Entwicklungs-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 100,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It analyzes its opponents with more accuracy than a supercomputer, which enables it to calmly back them into a corner."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512300,
				tcgplayer: 226572
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512300,
				tcgplayer: 226572
			}
		},
	],
}

export default card
