import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [275],
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
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
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shifty Substitution",
				fr: "Changement Malicieux",
				es: "Sustitución Astuta",
				it: "Sostituzione Subdola",
				pt: "Substituição Traiçoeira",
				de: "Listiger Ersatz"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent's hand has the effect \"Draw 3 cards.\" (This happens instead of the card's usual effect.)",
				fr: "Tant que ce Pokémon est sur le Poste Actif, chaque carte Supporter dans la main de votre adversaire a l'effet « Piochez 3 cartes. » (Ceci prévaut sur l'effet habituel de la carte.)",
				es: "Mientras este Pokémon esté en el Puesto Activo, cada carta de Partidario en la mano de tu rival tiene el efecto “Roba 3 cartas”. (Esto ocurre en vez del efecto habitual de la carta).",
				it: "Fintanto che questo Pokémon è in posizione attiva, ogni carta Aiuto nella mano del tuo avversario ha l'effetto: “pesca tre carte”. Questo effetto si sostituisce a quello normale della carta.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, cada carta de Apoiador na mão do seu oponente terá o efeito \"compre 3 cartas\" (isto acontece ao invés do efeito normal da carta).",
				de: "Solange dieses Pokémon in der Aktiven Position ist, hat jede Unterstützerkarte auf der Hand deines Gegners den Effekt „Ziehe 3 Karten“. (Dies wird anstelle des üblichen Effekts der Karte ausgeführt.)"
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
				en: "Fan Tornado",
				fr: "Tornade Soufflante",
				es: "Tornado Ventilador",
				it: "Ventagliociclone",
				pt: "Tornado de Leques",
				de: "Fächertornado"
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
				pt: "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action."
	}
}

export default card
