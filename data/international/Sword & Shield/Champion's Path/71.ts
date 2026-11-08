import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Galarian Cursola V",
		'fr-fr': "Corayôme de Galar V",
		'es-es': "Cursola de Galar V",
		'it-it': "Cursola di Galar V",
		'pt-br': "Cursola de Galar V",
		'de-de': "Galar-Gorgasonn V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [864],
	set: Set,
	hp: 190,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gnawing Aura",
				'fr-fr': "Aura Rongeante",
				'es-es': "Aura Persistente",
				'it-it': "Aura Assillante",
				'pt-br': "Aura Roedora",
				'de-de': "Quälende Aura"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là.",
				'es-es': "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 3 contadores de daño en ese Pokémon.",
				'it-it': "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti tre segnalini danno su quel Pokémon.",
				'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 3 contadores de dano naquele Pokémon.",
				'de-de': "Solange dieses Pokémon in der Aktiven Position ist, lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 3 Schadensmarken auf jenes Pokémon."
			},
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
			value: "-30"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			'en-us': "Hollow Missile",
			'fr-fr': "Missile Éthéré",
			'es-es': "Misil Hueco",
			'it-it': "Missile Vacuo",
			'pt-br': "Míssil Aeriforme",
			'de-de': "Hohlgeschoss"
		},

		effect: {
			'en-us': "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 500210,
		tcgplayer: 223070
	}
}

export default card
