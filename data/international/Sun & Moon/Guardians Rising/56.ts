import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		741,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supernatural Dance",
				'fr-fr': "Danse Surnaturelle",
				'es-es': "Danza Sobrenatural",
				'it-it': "Danza Soprannaturale",
				'pt-br': "Dança Sobrenatural",
				'de-de': "Übernatürlicher Tanz"
			},
			effect: {
				'en-us': "For each Pokémon in your opponent’s discard pile, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				'es-es': "Por cada Pokémon en la pila de descartes de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Per ogni Pokémon nella pila degli scarti del tuo avversario, metti un segnalino danno a piacimento sui suoi Pokémon.",
				'pt-br': "Para cada Pokémon na pilha de descarte do seu oponente, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege für jedes Pokémon im Ablagestapel deines Gegners 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Revelation Dance",
				'fr-fr': "Danse Éveil",
				'es-es': "Danza Despertar",
				'it-it': "Mutadanza",
				'pt-br': "Dança Reveladora",
				'de-de': "Wecktanz"
			},
			effect: {
				'en-us': "If there is no Stadium card in play, this attack does nothing.",
				'fr-fr': "S’il n’y a pas de carte Stade en jeu, cette attaque ne fait rien.",
				'es-es': "Si no hay ninguna carta de Estadio en juego, este ataque no hace nada.",
				'it-it': "Se non c’è in gioco alcuna carta Stadio, questo attacco non ha effetto.",
				'pt-br': "Se não houver nenhuma carta de Estádio em jogo, este ataque não fará nada.",
				'de-de': "Wenn keine Stadionkarte im Spiel ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Oricorio has sipped purple nectar. Its elegant, attractive dance will send the minds and hearts of its enemies to another world.",
	},

	thirdParty: {
		cardmarket: 297478,
		tcgplayer: 130962
	}
}

export default card
