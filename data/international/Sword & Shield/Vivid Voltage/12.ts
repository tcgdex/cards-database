import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [275],

	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shifty Substitution",
				'fr-fr': "Changement Malicieux",
				'es-es': "Sustitución Astuta",
				'it-it': "Sostituzione Subdola",
				'pt-br': "Substituição Traiçoeira",
				'de-de': "Listiger Ersatz"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent's hand has the effect \"Draw 3 cards.\" (This happens instead of the card's usual effect.)",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, chaque carte Supporter dans la main de votre adversaire a l'effet « Piochez 3 cartes. » (Ceci prévaut sur l'effet habituel de la carte.)",
				'es-es': "Mientras este Pokémon esté en el Puesto Activo, cada carta de Partidario en la mano de tu rival tiene el efecto “Roba 3 cartas”. (Esto ocurre en vez del efecto habitual de la carta).",
				'it-it': "Fintanto che questo Pokémon è in posizione attiva, ogni carta Aiuto nella mano del tuo avversario ha l'effetto: “pesca tre carte”. Questo effetto si sostituisce a quello normale della carta.",
				'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, cada carta de Apoiador na mão do seu oponente terá o efeito \"compre 3 cartas\" (isto acontece ao invés do efeito normal da carta).",
				'de-de': "Solange dieses Pokémon in der Aktiven Position ist, hat jede Unterstützerkarte auf der Hand deines Gegners den Effekt „Ziehe 3 Karten“. (Dies wird anstelle des üblichen Effekts der Karte ausgeführt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Fan Tornado",
				'fr-fr': "Tornade Soufflante",
				'es-es': "Tornado Ventilador",
				'it-it': "Ventagliociclone",
				'pt-br': "Tornado de Leques",
				'de-de': "Fächertornado"
			},
			effect: {
				'en-us': "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511480,
				tcgplayer: 226374
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511480,
				tcgplayer: 226374
			}
		},
	],
}

export default card
