import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Cursola V",
		fr: "Corayôme de Galar V",
		es: "Cursola de Galar V",
		it: "Cursola di Galar V",
		pt: "Cursola de Galar V",
		de: "Galar-Gorgasonn V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gnawing Aura",
				fr: "Aura Rongeante",
				es: "Aura Persistente",
				it: "Aura Assillante",
				pt: "Aura Roedora",
				de: "Quälende Aura"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là.",
				es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 3 contadores de daño en ese Pokémon.",
				it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti tre segnalini danno su quel Pokémon.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 3 contadores de dano naquele Pokémon.",
				de: "Solange dieses Pokémon in der Aktiven Position ist, lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 3 Schadensmarken auf jenes Pokémon."
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
			en: "Hollow Missile",
			fr: "Missile Éthéré",
			es: "Misil Hueco",
			it: "Missile Vacuo",
			pt: "Míssil Aeriforme",
			de: "Hohlgeschoss"
		},

		effect: {
			en: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
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
		cardmarket: 499960
	}
}

export default card
